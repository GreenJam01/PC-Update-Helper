import random
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests
import json

def parseMb():
	agents = ["user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
				"user-agent=Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36",
				"user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1",
				"user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182",
				"user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4638.69",
				"user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/88.0.4324.182",
				"user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4638.69"]
		# browser = webdriver.Chrome("parserSoup\chromedriver.exe")
	options = Options()
	options.add_argument("--headless")
	options.add_argument(agents[0])
	driver = webdriver.Chrome("parser\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/materinskie-platy")

	html = driver.page_source

	soup = BeautifulSoup(html)

	links = []

	for link in soup.find_all('a', class_='app-catalog-9gnskf e1259i3g0'):
		links.append("https://www.citilink.ru" + link['href'] + "properties/")

	final = json.dumps(links, indent=2)

	sborka = []

	i = 0
	j = 1

	while i < len(links):
		# time.sleep(6)
		if j >= 3:
			newOpt =  Options()
			newOpt.add_argument("--headless")
			newOpt.add_argument(agents[random.randint(0,6)])
			driver = webdriver.Chrome("parser\chromedriver.exe", options=newOpt)
			j = 0
		driver.get(links[i])
		soup = BeautifulSoup(driver.page_source)
		try:
			time.sleep(random.randint(1,3))
			print(links[i])
			properties = soup.find('ul', class_='app-catalog-rxgulu e1ckvoeh6').text

			price = soup.find('span', class_='e1j9birj0 e106ikdt0 app-catalog-8hy98m e1gjr6xo0').text.replace(" ", "")

			brandInd = properties.find("Бренд")
			brand = properties[brandInd+5:]
			brand = brand.split()[0]
			
			modelInd = properties.find("Модель")
			formfactInd = properties.find("Форм-фактор")
			model = properties[modelInd+6:formfactInd-1]

			title = brand + " " + " " + model

			socketInd = properties.find("Сокет")
			socket = properties[socketInd+5:]
			socket = socket.split()[0]

			memoryTypeInd = properties.find("Тип памяти")
			memoryType = properties[memoryTypeInd+10:]
			memoryType = memoryType.split()[0]

			maxMemoryInd = properties.find("Максимальный объем оперативной памяти")
			maxMemory = properties[maxMemoryInd+37:]
			maxMemory = maxMemory.split()[0]

			sborka.append( {"title": title, "brand": brand, "socket": socket, "memoryType": memoryType, "maxMemory": maxMemory, "price": price})
			i += 1
			j += 1
		except:
			print("something went wrong")
			j += 1

	final = json.dumps(sborka, indent=2)
	# для отладки
	if len(sborka) != 0:
		# для отладки
		f = open('mb.txt', 'w+')
		f.write(final)
		f.close()
	else:
		parseMb()

	# post на сервер

	# headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}
	# urlGpu = "http://localhost:8081/hardware/post-motherboard-list"

	# r = requests.post(urlGpu, data=final, headers=headers)

# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options
# import requests

# def parseMb():
# 	urlMotherboard = "http://localhost:8081/hardware/post-motherboard-list"

# 	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

# 	options = Options()
# 	options.add_argument("--headless")
# 	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
# 	driver.get("https://www.citilink.ru/catalog/materinskie-platy")

# 	html = driver.page_source
# 	soup = BeautifulSoup(html)

# 	mb = "["

# 	for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
# 		mb += "{\"title\": \"" + tag.find("a").text.split(",")[0][18:] + "\"}, "
# 	mb = mb[:-2]
# 	mb += "]"
# 	r = requests.post(urlMotherboard, data=mb, headers=headers)