import time

import requests
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
import numpy as np

columns = ['link', 'name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'pcie', 'cost']
mb_am4 = pd.DataFrame(columns=columns)
mb_lga1700 = pd.DataFrame(columns=columns)

def getPage(url):
  options = webdriver.FirefoxOptions()
  options.set_preference("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 YaBrowser/24.1.0.0 Safari/537.36")

  try:
    driver = webdriver.Firefox()

    driver.get(url=url)
    time.sleep(2.5)

    with open("index.html", "w", encoding="utf-8") as file:
      file.write(driver.page_source)

  except Exception as ex:
    print(ex)
  finally:
    driver.close()
    driver.quit()

def parseMotherBoardAm4(urls):
  for url in urls:
    getPage(url)

    with open("index.html", encoding="utf-8") as file:
      src = file.read()

    soup = BeautifulSoup(src, "lxml")

    all_mb = soup.find("div", class_="ehanbgo0").find_all("div", class_="e1loosed0")

    for mother_board in all_mb:
      getInfoMotherBoard(mother_board.find("div").find("a").get("href"))

def getInfoMotherBoard(url):
  try:
    # открываем страницу с материнской платой
    getPage("https://www.citilink.ru/" + url)
    with open("index.html", encoding="utf-8") as file:
      src = file.read()
    soup = BeautifulSoup(src, "lxml")

    cost = np.NAN
    try:
      cost = int(soup.find("span", class_="e1j9birj0").text.strip().replace(' ', ''))
    except:
      cost = np.NAN


    # открываем страницу с характеристиками
    link = "https://www.citilink.ru/" + soup.find("div", class_="app-catalog-jdon92").find("a").find_next_sibling("a").get("href")
    getPage(link)
    with open("index.html", encoding="utf-8") as file:
      src = file.read()
    soup = BeautifulSoup(src, "lxml")

    current = soup.find("ul", class_="app-catalog-rxgulu")

    core_xar = current.find("li")
    title = np.NAN
    try:
      brand = core_xar.find("div").find("span", class_="e1ckvoeh0").text.strip()
      model = core_xar.find("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()
      title = brand + ' ' + model
    except:
      title = np.NAN

    cpu = core_xar.find_next_sibling("li")
    soket = np.NAN
    chipset = np.NAN
    try:
      soket = cpu.find("div").find("span", class_="e1ckvoeh0").text.strip()[6:].lower()
      chipset = cpu.find("div").find_next_sibling("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()[4:].lower()
    except:
      soket = np.NAN
      chipset = np.NAN

    bloc_ram = cpu.find_next_sibling("li")
    num_ram = np.NAN
    frequency = np.NAN
    try:
      num_ram = int(bloc_ram.find("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip())
      frequency = int(bloc_ram.find("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()[:4])
    except:
      num_ram = np.NAN
      frequency = np.NAN

    mb_am4.loc[len(mb_am4.index)] = [link, title, soket, chipset, num_ram, frequency, cost]

  except:
    return

links_mb_am4 = ['https://www.citilink.ru/catalog/materinskie-platy--socet-am4/?sorting=price_asc',
               'https://www.citilink.ru/catalog/materinskie-platy--socet-am4/?p=2&sorting=price_asc']

parseMotherBoardAm4(links_mb_am4)
mb_am4.to_excel(r'D:\trainDataset\makeDataset\src\mb_am4.xlsx')

linsk_mb_lga1700 = ['https://www.citilink.ru/catalog/materinskie-platy--lga-1700/?sorting=price_asc',
                    'https://www.citilink.ru/catalog/materinskie-platy--lga-1700/?p=2&sorting=price_asc',
                    'https://www.citilink.ru/catalog/materinskie-platy--lga-1700/?p=3&sorting=price_asc']

parseMotherBoardAm4(linsk_mb_lga1700)
mb_lga1700.to_excel(r'D:\trainDataset\makeDataset\src\mb_lga1700.xlsx')