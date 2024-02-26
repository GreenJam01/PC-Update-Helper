from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

def parseCpu():
	urlCpu = "http://localhost:8081/hardware/post-cpu-list"

	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

	# browser = webdriver.Chrome("parserSoup\chromedriver.exe")
	options = Options()
	options.add_argument("--headless")
	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/processory/")

	html = driver.page_source
	soup = BeautifulSoup(html)

	cpu = "["

	for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
		cpu += "{\"title\": \"" + tag.find("a").text.split(",")[0].partition(' ')[2] + "\"}, "
	cpu = cpu[:-2]
	cpu += "]"
	r = requests.post(urlCpu, data=cpu, headers=headers)