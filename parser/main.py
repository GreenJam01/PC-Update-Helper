import json
import subprocess
from subprocess import call

import requests

nameGpu = "gpuParser"
nameCpu = "procParser"
nameRam = "ramParser"
nameHdd = "hddParser"
nameMotherboard ="motherboardParser"

url = "http://localhost:8080/assemblies"
gpuFile = open("parser/gpu.json")
cpuFile = open("parser/cpu.json")
ramFile = open("parser/ram.json")
hddFile = open("parser/hdd.json")
motherboardFile = open("parser/motherboard.json")

urlGpu = "http://localhost:8080/hardware/post-gpu-list"
urlCpu = "http://localhost:8080/hardware/post-cpu-list"
urlRam = "http://localhost:8080/hardware/post-ram-list"
urlHdd = "http://localhost:8080/hardware/post-hdd-list"
urlMotherboard = "http://localhost:8080/hardware/post-motherboard-list"

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