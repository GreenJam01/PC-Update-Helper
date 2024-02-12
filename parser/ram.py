from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

def parseRam():
	urlRam = "http://localhost:8080/hardware/post-ram-list"

	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

	options = Options()
	options.add_argument("--headless")
	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/moduli-pamyati/")

	html = driver.page_source
	soup = BeautifulSoup(html)

	ram = "["

	for tag in soup.find_all('div', class_='app-catalog-oacxam'):
		ram += "{\"title\": \"" + tag.find("a").text.split(",")[0][19:]
		ram = ram[:-2]
		ram += "GB\"}, "
	ram = ram[:-2]
	ram += "]"
	# print(ram)
	r = requests.post(urlRam, data=ram, headers=headers)