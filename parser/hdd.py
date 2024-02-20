from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

def parseHdd():
	urlHdd = "http://localhost:8080/hardware/post-hdd-list"

	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

	options = Options()
	options.add_argument("--headless")
	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/zhestkie-diski/")

	html = driver.page_source
	soup = BeautifulSoup(html)

	hdd = "["

	for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
		hdd += "{\"title\": \"" + tag.find("a").text.split(",")[0][13:] + "\"}, "
	hdd = hdd[:-2]
	hdd += "]"
	r = requests.post(urlHdd, data=hdd, headers=headers)