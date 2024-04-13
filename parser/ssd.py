import random
import time
from bs4 import BeautifulSoup
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import json

def parseSsd(extraStr):
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
	driver.get("https://www.citilink.ru" + extraStr)

	html = driver.page_source

	soup = BeautifulSoup(html)
	temp_soup = soup
	links = []

	for link in soup.find_all('a', class_='app-catalog-9gnskf e1259i3g0'):
		links.append("https://www.citilink.ru" + link['href'] + "properties/")

	if len(links) == 0:
		parseSsd(extraStr)
	else:
		final = json.dumps(links, indent=2)

		sborka = []

		i = 0
		j = 1

		while i < 1:
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

				memoryInd = properties.find("Объем накопителя")
				memory = properties[memoryInd+16:]
				memory = memory.split()[0]

				interfaceInd = properties.find("Интерфейс")
				razemInd = properties.find("Разъем")
				interface = properties[interfaceInd+9:razemInd-1]
				if len(interface) >= 15:
					interface = interface[:15]
					interface = interface[::-1]
					interface = interface[interface.find(" "):]
					interface = interface[::-1]

				modelInd = properties.find("Модель")
				hddTypeInd = properties.find("Тип жесткого диска")
				model = properties[modelInd+6:hddTypeInd-1]

				maxReadingSpeedInd = properties.find("Максимальная скорость чтения")
				maxReadingSpeed = properties[maxReadingSpeedInd+28:]
				maxReadingSpeed = maxReadingSpeed.split()[0]

				maxRecordingSpeedInd = properties.find("Максимальная скорость записи")
				maxRecordingSpeed = properties[maxRecordingSpeedInd+28:]
				maxRecordingSpeed = maxRecordingSpeed.split()[0]

				title = brand + " " + model

				sborka.append( {"title": title, "brand": brand, "memory": memory, "interface": interface, "maxReadingSpeed": maxReadingSpeed, "maxRecordingSpeed": maxRecordingSpeed , "price": price, "isSsd": 1})
				i += 1
				j += 1
			except:
				print("something went wrong")
				j += 1

		final = json.dumps(sborka, indent=2)
		# для отладки
		if len(sborka) != 0:
			# для отладки
			f = open('ssd.txt', 'w+')
			f.write(final)
			f.close()
		else:
			parseSsd(extraStr)

		# post на сервер

		headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}
		urlGpu = "http://localhost:8081/hardware/post-hdd-list"

		#print(final)
		r = requests.post(urlGpu, data=final, headers=headers)
		soup = temp_soup
		try:
			if(soup.find('a', class_='app-catalog-peotpw e1mnvjgw0') != None):
				nextPages = soup.find_all('div', class_='app-catalog-1l2pgm7 e1glls3k0')
				nextPage = None
				# print(123)
				try:
					nextPage = nextPages[1].find('a', class_='app-catalog-peotpw e1mnvjgw0')['href']
				except IndexError:
					nextPage = nextPages[0].find('a', class_='app-catalog-peotpw e1mnvjgw0')['href']
				# print(nextPage)
				parseSsd(nextPage)
		except TypeError:
			qwe = 1