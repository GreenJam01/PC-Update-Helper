from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests

def parseGpu():
	urlGpu = "http://localhost:8080/hardware/post-gpu-list"

	headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

	options = Options()
	options.add_argument("--headless")
	driver = webdriver.Chrome("parserSoup\chromedriver.exe", options=options)
	driver.get("https://www.citilink.ru/catalog/videokarty/")

	html = driver.page_source
	soup = BeautifulSoup(html)

	gpu = "["

	for tag in soup.find_all('div', class_='app-catalog-1tp0ino'):
		gpu += "{\"title\": \"" + tag.find("a").text.split(",")[0].partition(' ')[2] + "\"}, "
	gpu = gpu[:-2]
	gpu += "]"
	r = requests.post(urlGpu, data=gpu, headers=headers)