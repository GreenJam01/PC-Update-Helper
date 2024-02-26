from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

def parseMb():
	urlMotherboard = "http://localhost:8081/hardware/post-motherboard-list"

	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

	options = Options()
	options.add_argument("--headless")
	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/materinskie-platy")

	html = driver.page_source
	soup = BeautifulSoup(html)

	mb = "["

	for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
		mb += "{\"title\": \"" + tag.find("a").text.split(",")[0][18:] + "\"}, "
	mb = mb[:-2]
	mb += "]"
	r = requests.post(urlMotherboard, data=mb, headers=headers)