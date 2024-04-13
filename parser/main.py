from ram import parseRam
from cpu import parseCpu
from hdd import parseHdd
from gpu import parseGpu
from motherboard import parseMb
from ssd import parseSsd
import multiprocessing

if __name__ == '__main__':
	# parseGpu()
	# parseRam()
	# parseMb()
	# parseHdd()
	# parseSsd()
	# proc1 = multiprocessing.Process(target=parseCpu, args=["/catalog/processory/"])
	# proc2 = multiprocessing.Process(target=parseGpu)
	# proc3 = multiprocessing.Process(target=parseRam)
	# proc4 = multiprocessing.Process(target=parseMb)
	# proc5 = multiprocessing.Process(target=parseHdd)
	# proc6 = multiprocessing.Process(target=parseSsd)
	# proc1.start()

	#parseCpu("/catalog/processory/")
	#parseGpu("/catalog/videokarty/")
	#parseRam("/catalog/moduli-pamyati/")
	#parseMb("/catalog/materinskie-platy/")
	#parseHdd("/catalog/zhestkie-diski/")
	parseSsd("/catalog/ssd-nakopiteli/")
	

	# proc2.start()
	# proc3.start()
	# proc4.start()
	# proc5.start()
	# proc6.start()


	# proc1.join()
	# proc2.join()
	# proc3.join()
    # Thread(target = parseCpu).start()
    # Thread(target = parseGpu).start()
    # # Thread(target = parseHdd).start()
    # Thread(target = parseRam).start()
    # # Thread(target = parseMb).start()
