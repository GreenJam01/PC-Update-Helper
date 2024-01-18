import json
import subprocess
from subprocess import call

import requests

nameGpu = "gpuParser"
nameCpu = "procParser"
nameRam = "ramParser"
nameHdd = "hddParser"
nameMotherboard ="motherboardParser"

open('parser/ gpu.json', 'w').close()
open('parser/ cpu.json', 'w').close()
open('parser/ ram.json', 'w').close()
open('parser/ hdd.json', 'w').close()
open('parser/ motherboard.json', 'w').close()

p1 = subprocess.Popen( ["scrapy", "crawl", "{0}".format(nameGpu), "-O {0}.json".format("gpu")]
                     , cwd='parser/', stdout=subprocess.DEVNULL)
p2 = subprocess.Popen( ["scrapy", "crawl", "{0}".format(nameCpu), "-O {0}.json".format("cpu")]
                     , cwd='parser/', stdout=subprocess.DEVNULL)
p3 = subprocess.Popen( ["scrapy", "crawl", "{0}".format(nameRam), "-O {0}.json".format("ram")]
                     , cwd='parser/', stdout=subprocess.DEVNULL)
p4 = subprocess.Popen( ["scrapy", "crawl", "{0}".format(nameHdd), "-O {0}.json".format("hdd")]
                     , cwd='parser/', stdout=subprocess.DEVNULL)
p5 = subprocess.Popen( ["scrapy", "crawl", "{0}".format(nameMotherboard), "-O {0}.json".format("motherboard")]
                     , cwd='parser/', stdout=subprocess.DEVNULL)
p1.communicate()
p2.communicate()
p3.communicate()
p4.communicate()
p5.communicate()

# url = "http://localhost:8080/assemblies"
gpuFile = open("parser/ gpu.json")
cpuFile = open("parser/ cpu.json")
ramFile = open("parser/ ram.json")
hddFile = open("parser/ hdd.json")
motherboardFile = open("parser/ motherboard.json")

# while (gpuFile.read(4) == '[\n\n]'):
if (gpuFile.read(4) == '[\n\n]'):
    open('parser/ gpu.json', 'w').close()
    p12 = call( ["scrapy", "crawl", "{0}".format(nameGpu), "-O {0}.json".format("gpu")]
              , cwd='parser/', stdout=subprocess.DEVNULL)
    gpuFile = open("parser/ gpu.json")

if (cpuFile.read(4) == '[\n\n]'):
# while (cpuFile.read(4) == '[\n\n]'):
    open('parser/ cpu.json', 'w').close()
    p22 = call( ["scrapy", "crawl", "{0}".format(nameCpu), "-O {0}.json".format("cpu")]
              , cwd='parser/', stdout=subprocess.DEVNULL)
    gpuFile = open("parser/ cpu.json")

if (ramFile.read(4) == '[\n\n]'):
# while (ramFile.read(4) == '[\n\n]'):
    open('parser/ ram.json', 'w').close()
    p32 = call( ["scrapy", "crawl", "{0}".format(nameRam), "-O {0}.json".format("ram")]
              , cwd='parser/', stdout=subprocess.DEVNULL)
    ramFile = open("parser/ ram.json")

if (hddFile.read(4) == '[\n\n]'):
# while (hddFile.read(4) == '[\n\n]'):
    open('parser/ hdd.json', 'w').close()
    p42 = call( ["scrapy", "crawl", "{0}".format(nameHdd), "-O {0}.json".format("hdd")]
              , cwd='parser/', stdout=subprocess.DEVNULL)
    hddFile = open("parser/ hdd.json")

if (motherboardFile.read(4) == '[\n\n]'):
# while (motherboardFile.read(4) == '[\n\n]'):
    open('parser/ motherboard.json', 'w').close()
    p52 = call( ["scrapy", "crawl", "{0}".format(nameMotherboard), "-O {0}.json".format("motherboard")]
              , cwd='parser/', stdout=subprocess.DEVNULL)
    motherboardFile = open("parser/ motherboard.json")


urlGpu = "http://localhost:8080/hardware/post-gpu-list"
urlCpu = "http://localhost:8080/hardware/post-cpu-list"
urlRam = "http://localhost:8080/hardware/post-ram-list"
urlHdd = "http://localhost:8080/hardware/post-hdd-list"
urlMotherboard = "http://localhost:8080/hardware/post-motherboard-list"

gpuFile = open("parser/ gpu.json")
cpuFile = open("parser/ cpu.json")
ramFile = open("parser/ ram.json")
hddFile = open("parser/ hdd.json")
motherboardFile = open("parser/ motherboard.json")

dataListGpu = json.load(gpuFile)
dataListCpu = json.load(cpuFile)
dataListRam = json.load(ramFile)
dataListHdd = json.load(hddFile)
dataListMotherboard = json.load(motherboardFile)

headers = {'Content-type': 'application/json', 'Connection': 'Keep-Alive'}

r = requests.post(urlGpu, data=json.dumps(dataListGpu), headers=headers)
r = requests.post(urlCpu, data=json.dumps(dataListCpu), headers=headers)
r = requests.post(urlRam, data=json.dumps(dataListRam), headers=headers)
r = requests.post(urlHdd, data=json.dumps(dataListHdd), headers=headers)
r = requests.post(urlMotherboard, data=json.dumps(dataListMotherboard), headers=headers)