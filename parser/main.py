from ram import parseRam
from cpu import parseCpu
from hdd import parseHdd
from gpu import parseGpu
from motherboard import parseMb
from threading import Thread
import multiprocessing

if __name__ == '__main__':
	proc1 = multiprocessing.Process(target=parseCpu)
	proc2 = multiprocessing.Process(target=parseGpu)
	proc3 = multiprocessing.Process(target=parseRam)
	proc1.start()
	proc2.start()
	proc3.start()
	
	# proc1.join()
	# proc2.join()
	# proc3.join()
    # Thread(target = parseCpu).start()
    # Thread(target = parseGpu).start()
    # # Thread(target = parseHdd).start()
    # Thread(target = parseRam).start()
    # # Thread(target = parseMb).start()
