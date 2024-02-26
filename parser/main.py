from ram import parseRam
from cpu import parseCpu
from hdd import parseHdd
from gpu import parseGpu
from motherboard import parseMb
from threading import Thread

if __name__ == '__main__':
    Thread(target = parseCpu).start()
    # Thread(target = parseGpu).start()
    # Thread(target = parseHdd).start()
    # Thread(target = parseRam).start()
    # Thread(target = parseMb).start()
