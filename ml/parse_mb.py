import time

import requests
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
import numpy as np


def main():
  columns_mb = ['link', 'name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'pcie', 'cost']
  mb_am4 = pd.DataFrame(columns=columns_mb)
  mb_lga1700 = pd.DataFrame(columns=columns_mb)


  # links_mb_am4 = ['https://www.citilink.ru/catalog/materinskie-platy--socet-am4/?sorting=price_asc',
  #                 'https://www.citilink.ru/catalog/materinskie-platy--socet-am4/?p=2&sorting=price_asc']
  #
  # parseMotherBoard(links_mb_am4, mb_am4)
  # mb_am4.to_excel('./datasets/mb_am4.xlsx')
  #
  # linsk_mb_lga1700 = ['https://www.citilink.ru/catalog/materinskie-platy--lga-1700/?sorting=price_asc',
  #                     'https://www.citilink.ru/catalog/materinskie-platy--lga-1700/?p=2&sorting=price_asc',
  #                     'https://www.citilink.ru/catalog/materinskie-platy--lga-1700/?p=3&sorting=price_asc']
  #
  # parseMotherBoard(linsk_mb_lga1700, mb_lga1700)
  # mb_lga1700.to_excel('./datasets/mb_lga1700.xlsx')


  # columns_gpu = ['link', 'name', 'chipset', 'intefrace', 'memory', 'cost']
  # rtx_2060 = pd.DataFrame(columns=columns_gpu)
  #
  # links_rtx_2060 = ['https://www.citilink.ru/catalog/videokarty/?pf=discount.any,rating.any&f=discount.any,rating.any,9368_29nvidiad1d1geforced1rtxd12060']
  # parseGPU(links_rtx_2060, rtx_2060)
  # rtx_2060.to_excel('./datasets/rtx_2060.xlsx')


  # columns_cpu = ['link', 'name', 'core', 'threads', 'frequency', 'soket', 'pcie', 'cost']
  # r3_cpu = pd.DataFrame(columns=columns_cpu)
  # links_r3 = ['https://www.citilink.ru/catalog/processory/?pf=discount.any,rating.any&f=discount.any,rating.any,156_26ryzend13']
  # parseCPU(links_r3, r3_cpu)
  # r3_cpu.to_excel('./datasets/r3_cpu.xlsx')

  # columns_cpu = ['link', 'name', 'core', 'threads', 'frequency', 'soket', 'pcie', 'cost']
  # i3_cpu = pd.DataFrame(columns=columns_cpu)
  # links_i3 = ['https://www.citilink.ru/catalog/processory--intel-lga-1700-cpu/?pf=discount.any%2Crating.any%2C157_26lgad11700&f=discount.any%2Crating.any%2C157_26lgad11700%2C156_26cored1i3']
  # parseCPU(links_i3, i3_cpu)
  # i3_cpu.to_excel('./datasets/i3_cpu.xlsx')

  # rtx_3060 = pd.DataFrame(columns=columns_gpu)
  # links_rtx_3060 = ['https://www.citilink.ru/catalog/videokarty/?pf=discount.any%2Crating.any&f=discount.any%2Crating.any%2C9368_29nvidiad1d1geforced1rtxd13050']
  # parseGPU(links_rtx_3060, rtx_3060)
  # rtx_3060.to_excel('./datasets/rtx_3060.xlsx')

  # rtx_3061 = pd.DataFrame(columns=columns_gpu)
  # links_rtx_3061 = [
  #   'https://www.citilink.ru/catalog/videokarty/?pf=discount.any%2Crating.any&f=discount.any%2Crating.any%2C9368_29nvidiad1d1geforced1rtxd13060']
  # parseGPU(links_rtx_3061, rtx_3061)
  # rtx_3061.to_excel('./datasets/rtx_3061.xlsx')

  # rtx_4060 = pd.DataFrame(columns=columns_gpu)
  # links_rtx_4060 = [
  #   'https://www.citilink.ru/catalog/videokarty/?pf=discount.any%2Crating.any&f=discount.any%2Crating.any%2C9368_29nvidiad1d1geforced1rtxd14060']
  # parseGPU(links_rtx_4060, rtx_4060)
  # rtx_4060.to_excel('./datasets/rtx_4060.xlsx')

  #rtx_4070 = pd.DataFrame(columns=columns_gpu)
  #links_rtx_4070 = [
  #  'https://www.citilink.ru/catalog/videokarty/?pf=discount.any%2Crating.any%2C9368_29nvidiad1d1geforced1rtxd13060%2C9368_29nvidiad1d1geforced1rtxd14070&f=discount.any%2Crating.any%2C9368_29nvidiad1d1geforced1rtxd14070']
  #parseGPU(links_rtx_4070, rtx_4070)
  #rtx_4070.to_excel('./datasets/rtx_4070.xlsx')
























############################################################
############################################################
def getPage(url):
  options = webdriver.FirefoxOptions()
  options.set_preference("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 YaBrowser/24.1.0.0 Safari/537.36")

  try:
    driver = webdriver.Firefox()

    driver.get(url=url)
    time.sleep(1)

    with open("index.html", "w", encoding="utf-8") as file:
      file.write(driver.page_source)

  except Exception as ex:
    print(ex)
  finally:
    driver.close()
    driver.quit()

############################################################
############################################################
def parseMotherBoard(urls, df):
  for url in urls:
    getPage(url)

    with open("index.html", encoding="utf-8") as file:
      src = file.read()

    soup = BeautifulSoup(src, "lxml")

    all_mb = soup.find("div", class_="ehanbgo0").find_all("div", class_="e1loosed0")

    for mother_board in all_mb:
      getInfoMotherBoard(mother_board.find("div").find("a").get("href"), df)

############################################################
############################################################
def getInfoMotherBoard(url, df):
  try:
    ####################################################
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

    ####################################################
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


    df.loc[len(df.index)] = [link, title, soket, chipset, num_ram, frequency, np.NAN, cost]

  except:
    return

############################################################
############################################################
def parseCPU(urls, df):
  for url in urls:
    getPage(url)

    with open("index.html", encoding="utf-8") as file:
      src = file.read()

    soup = BeautifulSoup(src, "lxml")

    all_cpu = soup.find("div", class_="ehanbgo0").find_all("div", class_="e1loosed0")

    for cpu in all_cpu:
      getInfoCPU(cpu.find("div").find("a").get("href"), df)

############################################################
############################################################
def getInfoCPU(url, df):
  try:
    ####################################################
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

    ####################################################
    # открываем страницу с характеристиками
    link = "https://www.citilink.ru/" + soup.find("div", class_="app-catalog-jdon92").find("a").find_next_sibling("a").get("href")
    getPage(link)
    with open("index.html", encoding="utf-8") as file:
      src = file.read()
    soup = BeautifulSoup(src, "lxml")

    current = soup.find("ul", class_="app-catalog-rxgulu")

    core_xar = current.find("li")
    title = np.NAN
    brand = np.NAN
    model = np.NAN
    soket = np.NAN
    core_num = np.NAN
    threads = np.NAN
    frequency = np.NAN
    try:
      brand = core_xar.find("div").find("span", class_="e1ckvoeh0").text.strip()
      print(brand)
      model = core_xar.find("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()
      print(model)
      soket = core_xar.find("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()
      print(soket)
      core_nums = int(core_xar.find("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find("span",
                                                                                  class_="e1ckvoeh0").text.strip())
      print(core_nums)
      threads = int(core_xar.find("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find("span",
                                                                                  class_="e1ckvoeh0").text.strip())
      print(threads)
      frequency = float(core_xar.find("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()[:3])

      print(frequency)
      title = brand + ' ' + model
    except:
      title = np.NAN
      brand = np.NAN
      model = np.NAN
      soket = np.NAN
      core_num = np.NAN
      threads = np.NAN
      frequency = np.NAN

    specific = core_xar.find_next_sibling("li")
    ram_type = np.NAN
    ram_frequency = np.NAN
    try:
      ram_type = specific.find("div").find("span", class_="e1ckvoeh0").text.strip()
      print(ram_type)
      ram_frequency = int(specific.find("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()[:4].lower())
      print(ram_frequency)
    except:
      ram_type = np.NAN
      ram_frequency = np.NAN

    pcie_bloc = specific.find_next_sibling("li")
    pcie = np.NAN
    try:
      pcie = pcie_bloc.find("div").find("span", class_="e1ckvoeh0").text.strip()[12:]
      print(pcie)
    except:
      pcie = np.NAN


    df.loc[len(df.index)] = [link, title, core_nums, threads, frequency, soket, pcie, cost]

  except:
    return

############################################################
############################################################
def parseGPU(urls, df):
  for url in urls:
    getPage(url)

    with open("index.html", encoding="utf-8") as file:
      src = file.read()

    soup = BeautifulSoup(src, "lxml")

    all_gpu = soup.find("div", class_="ehanbgo0").find_all("div", class_="e1loosed0")

    for gpu in all_gpu:
      getInfoGPU(gpu.find("div").find("a").get("href"), df)

############################################################
############################################################
def getInfoGPU(url, df):
  try:
    # открываем страницу с видеокартой
    getPage("https://www.citilink.ru/" + url)
    with open("index.html", encoding="utf-8") as file:
      src = file.read()
    soup = BeautifulSoup(src, "lxml")

    cost = np.NAN
    try:
      cost = int(soup.find("span", class_="e1j9birj0").text.strip().replace(' ', ''))
    except:
      cost = np.NAN

    ####################################################
    # открываем страницу с характеристиками
    link = "https://www.citilink.ru/" + soup.find("div", class_="app-catalog-jdon92").find("a").find_next_sibling(
      "a").get("href")
    getPage(link)
    with open("index.html", encoding="utf-8") as file:
      src = file.read()
    soup = BeautifulSoup(src, "lxml")

    current = soup.find("ul", class_="app-catalog-rxgulu")

    core_xar = current.find("li")
    title = np.NAN
    chipset = np.NAN
    interface = np.NAN
    try:
      brand = core_xar.find("div").find("span", class_="e1ckvoeh0").text.strip()
      print(brand)
      model = core_xar.find("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()
      print(model)
      title = brand + ' ' + model
      chipset = core_xar.find("div").find_next_sibling("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()[16:]
      print(chipset)
      interface = core_xar.find("div").find_next_sibling("div").find_next_sibling("div").find_next_sibling("div").find("span", class_="e1ckvoeh0").text.strip()[6:9]
      print(interface)
    except:
      title = np.NAN
      chipset = np.NAN
      interface = np.NAN

    memory_xar = core_xar.find_next_sibling("li")
    memory = np.NAN
    try:
      memory = int(memory_xar.find("div").find("span", class_="e1ckvoeh0").text.strip()[:1])
    except:
      memory = np.NAN

    df.loc[ len(df.index) ] = [link, title, chipset, interface, memory, cost]

  except:
    return

main()