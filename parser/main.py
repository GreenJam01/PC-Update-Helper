from ram import parseRam
from cpu import parseCpu
from hdd import parseHdd
from gpu import parseGpu
from motherboard import parseMb
from ssd import parseSsd
import schedule
import time
import multiprocessing
import eureka

def parse_cpu_daily():
    parseCpu("/catalog/processory/")

def parse_gpu_daily():
    parseGpu("/catalog/videokarty/")

def parse_ram_daily():
    parseRam("/catalog/moduli-pamyati/")

def parse_mb_daily():
    parseMb("/catalog/materinskie-platy/")

def parse_hdd_daily():
    parseHdd("/catalog/zhestkie-diski/")

def parse_ssd_daily():
    parseSsd("/catalog/ssd-nakopiteli/")

# schedule.every().day.at("01:00").do(parse_cpu_daily)
# schedule.every().day.at("02:00").do(parse_gpu_daily)
# schedule.every().day.at("03:00").do(parse_ram_daily)
# schedule.every().day.at("04:00").do(parse_mb_daily)
schedule.every().day.at("05:00").do(parse_hdd_daily)
# schedule.every().day.at("06:00").do(parse_ssd_daily)

if __name__ == "__main__":
    eureka.init()
    while True:
        schedule.run_all()
        time.sleep(1)