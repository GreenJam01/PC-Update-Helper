import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests
import json

def parseCpu():
	# browser = webdriver.Chrome("parserSoup\chromedriver.exe")
	options = Options()
	options.add_argument("--headless")
	driver = webdriver.Chrome("parser\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/processory/")

	html = driver.page_source

	soup = BeautifulSoup(html)

	links = []

	for link in soup.find_all('a', class_='app-catalog-9gnskf e1259i3g0'):
		links.append("https://www.citilink.ru" + link['href'] + "properties/")

	final = json.dumps(links, indent=2)

	sborka = []

	i = 0
	while i < len(links):
		# time.sleep(6)
		driver.get(links[i])
		soup = BeautifulSoup(driver.page_source)
		try:
			time.sleep(3)
			# print(links[i])
			title = soup.find("h1", class_='e1ubbx7u0 eml1k9j0 app-catalog-lc5se5 e1gjr6xo0').text.split(",")[0].partition(' ')[2]
			title = title[10:]
			
			properties = soup.find('ul', class_='app-catalog-rxgulu e1ckvoeh6').text

			coreInd = properties.find("Количество ядер")
			cores = properties[coreInd+15:]
			cores = cores.split()[0]

			price = soup.find('span', class_='e1j9birj0 e106ikdt0 app-catalog-8hy98m e1gjr6xo0').text.replace(" ", "")

			brandInd = properties.find("Бренд")
			brand = properties[brandInd+5:]
			brand = brand.split()[0]

			frequencyInd = properties.find("Частота")
			frequency = properties[frequencyInd+7:]
			frequency = frequency.split()[0]

			threadsNumberInd = properties.find("Количество потоков")
			threadsNumber = properties[threadsNumberInd+18:]
			threadsNumber = threadsNumber.split()[0]

			sborka.append( {"title": title, "coresNumber": cores, "price": price, "brand": brand, "frequency": frequency, "threadsNumber": threadsNumber})
			i += 1
		except:
			i = i

	final = json.dumps(sborka, indent=2)
	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}
	urlCpu = "http://localhost:8080/hardware/post-cpu-list"

	r = requests.post(urlCpu, data=final, headers=headers)

# cpu = []

# for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
# 	cpu.append({"title": tag.find("a").text.split(",")[0].partition(' ')[2]})

# final = json.dumps(cpu, indent=2)
# print(final)
# cpu = "["

# for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
# 	cpu += "{\"title\": \"" + tag.find("a").text.split(",")[0].partition(' ')[2] + "\"}, "
# cpu = cpu[:-2]
# cpu += "]"
# print(cpu)


# def parseCpu():
# 	urlCpu = "http://localhost:8080/hardware/post-cpu-list"

# 	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

# 	# browser = webdriver.Chrome("parserSoup\chromedriver.exe")
# 	options = Options()
# 	options.add_argument("--headless")
# 	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
# 	driver.get("https://www.citilink.ru/catalog/processory/")

# 	html = driver.page_source
# 	soup = BeautifulSoup(html)

# 	cpu = "["

# 	for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
# 		cpu += "{\"title\": \"" + tag.find("a").text.split(",")[0].partition(' ')[2] + "\"}, "
# 	cpu = cpu[:-2]
# 	cpu += "]"
# 	r = requests.post(urlCpu, data=cpu, headers=headers)