import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import recall_score, f1_score
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_validate
import random

column_cpu = ["name", "core", "frequency", "threads", "soket", "PCIE", "cost"]

r5 = pd.DataFrame(columns=column_cpu)

r5.loc[ len(r5.index) ] = ["ryzen 5 5500", 6, 4.2, 12, "am4", 3.0, 10590]
r5.loc[ len(r5.index) ] = ["ryzen 5 5500GT", 6, 4.2, 12, "am4", 3.0, 10590]
r5.loc[ len(r5.index) ] = ["ryzen 5 5600", 6, 4.4, 12, "am4", 4.0, 13590]
r5.loc[ len(r5.index) ] = ["ryzen 5 5600G", 6, 4.4, 12, "am4", 3.0, 14690]
r5.loc[ len(r5.index) ] = ["ryzen 5 5600X", 6, 4.6, 12, "am4", 4.0, 16990]
r5.loc[ len(r5.index) ] = ["ryzen 5 5600GT", 6, 4.6, 12, "am4", 3.0, 17990]

i5 = pd.DataFrame(columns=column_cpu)

i5.loc[ len(i5.index) ] = ["core i5 12400", 6, 4.4, 12, "LGA1700", 5.0, 17990]
i5.loc[ len(i5.index) ] = ["core i5 12400F", 6, 4.4, 12, "LGA1700", 5.0, 15990]
i5.loc[ len(i5.index) ] = ["core i5 12400T", 6, 4.2, 12, "LGA1700", 5.0, 22990]



mbs = pd.read_excel('mb_am4.xlsx')
mbs = mbs[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]



column_gpu = ['gpu_name', 'gpu_chipset', 'gpu_interface', 'gpu_memery', 'gpu_cost']
gpu = pd.DataFrame(columns=column_gpu)
gpu.loc[ len(gpu.index) ] = ['KFA2 GeForce GTX 1650 X Black', 'GTX 1650', 3.0, 4, 47900]
gpu.loc[ len(gpu.index) ] = ['MSI NVIDIA GeForce RTX 2060 VENTUS GP OC', 'RTX 2060', 3.0, 6, 47900]
gpu.loc[ len(gpu.index) ] = ['GIGABYTE NVIDIA GeForce RTX 4060 GV-N4060EAGLE OC-8GD', 'RTX 4060', 4.0, 8, 46200]


column_ram = ['ram_name', 'ram_frequency', 'ram_volume', 'ram_num_ram', 'ram_cost']
ram = pd.DataFrame(columns=column_ram)
ram.loc[ len(ram.index) ] = ['Kingston Fury Beast Black', 3200, 8, 2, 5990]



column_hdd = ['hdd_name', 'hdd_volume', 'hdd_cost']
hdd = pd.DataFrame(columns=column_hdd)
hdd.loc[ len(hdd.index) ] = ['WD Blue', 2048, 8290]



column_ssd = ['ssd_name', 'ssd_volume', 'ssd_frequency', 'ssd_cost']
ssd = pd.DataFrame(columns=column_ssd)
ssd.loc[ len(ssd.index) ] = ['Kingston A400', 480, 450, 4290]
ssd.loc[ len(ssd.index) ] = ['Kingston A400', 240, 450, 3590]



column_build = ['cpu_name', 'cpu_core', 'cpu_frequency', 'cpu_threads', 'cpu_soket', 'cpu_pcie', 'cpu_cost',
                'mb_name', 'mb_soket', 'mb_chipset', 'mb_num_ram', 'mb_frequency_ram', 'mb_cost',
                'gpu_name', 'gpu_chipset', 'gpu_interface', 'gpu_memory', 'gpu_cost',
                'ram_name', 'ram_frequency', 'ram_volume', 'ram_num_ram', 'ram_cost',
                'hdd_name', 'hdd_volume', 'hdd_cost',
                'ssd_name', 'ssd_volume', 'ssd_frequency', 'ssd_cost',
                'cost_update', 'goal'
               ]

cat_cols = ['cpu_name', 'cpu_soket',
            'mb_name', 'mb_soket', 'mb_chipset',
            'gpu_name', 'gpu_chipset',
            'ram_name',
            'hdd_name',
            'ssd_name',
            'goal']

build_with_bad_gpu = pd.DataFrame(columns=column_build)

target = pd.DataFrame(columns=['choose'])

target_cpu = pd.DataFrame(columns=['choose'])
build_bad_cpu = pd.DataFrame(columns=column_build)

target_gpu = pd.DataFrame(columns=['choose'])
build_bad_gpu = pd.DataFrame(columns=column_build)

target_ssd = pd.DataFrame(columns=['choose'])
build_bad_ssd = pd.DataFrame(columns=column_build)

target_cpu_gpu = pd.DataFrame(columns=['choose'])
build_bad_cpu_gpu = pd.DataFrame(columns=column_build)

build = []
update = []
for index, cpu in r5.iterrows():
  for index, mb in mbs.iterrows():
    for i in range(10):
      build.extend(cpu.values)
      build.extend(mb.values)
      build.extend(gpu.loc[0].values)
      build.extend(ram.loc[0].values)
      build.extend(hdd.loc[0].values)
      build.extend(ssd.loc[0].values)
      build.append(random.randint(47900, 50000))
      build.append('game')

      build_with_bad_gpu.loc[ len(build_with_bad_gpu.index) ] = build
      build_bad_gpu.loc[ len(build_bad_gpu.index) ] = build
      target_gpu.loc[ len(target_gpu.index) ] = 1

      build = []

      target.loc[ len(target.index) ] = ['gpu']

mbs = pd.read_excel('mb_lga1700.xlsx')
mbs = mbs[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]

for index, cpu in i5.iterrows():
  for index, mb in mbs.iterrows():
    for i in range(10):
      build.extend(cpu.values)
      build.extend(mb.values)
      build.extend(gpu.loc[0].values)
      build.extend(ram.loc[0].values)
      build.extend(hdd.loc[0].values)
      build.extend(ssd.loc[0].values)
      build.append(random.randint(47900, 50000))
      build.append('game')

      build_with_bad_gpu.loc[ len(build_with_bad_gpu.index) ] = build
      build_bad_gpu.loc[ len(build_bad_gpu.index) ] = build
      if i % 2 == 0:
        target_gpu.loc[ len(target_gpu.index) ] = 1
      else:
        target_gpu.loc[ len(target_gpu.index) ] = 2

      build = []

      target.loc[ len(target.index) ] = ['gpu']


mbs = pd.read_excel('mb_am4.xlsx')
mbs = mbs[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]

build = []
update = []
for index, cpu in r5.iterrows():
  for index, mb in mbs.iterrows():
    for i in range(10):
      build.extend(cpu.values)
      build.extend(mb.values)
      build.extend(gpu.loc[0].values)
      build.extend(ram.loc[0].values)
      build.extend(hdd.loc[0].values)
      build.extend(['wihout', 0, 0, 0])
      build.append(random.randint(4300, 5000))
      build.append('game')

      build_with_bad_gpu.loc[ len(build_with_bad_gpu.index) ] = build
      build_bad_ssd.loc[ len(build_bad_ssd.index) ] = build
      if i % 2 == 0:
        target_ssd.loc[ len(target_ssd.index) ] = 0
      else:
        target_ssd.loc[ len(target_ssd.index) ] = 1

      build = []

      target.loc[ len(target.index) ] = ['ssd']

mbs = pd.read_excel('mb_lga1700.xlsx')
mbs = mbs[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]

build = []
update = []
for index, cpu in i5.iterrows():
  for index, mb in mbs.iterrows():
    for i in range(10):
      build.extend(cpu.values)
      build.extend(mb.values)
      build.extend(gpu.loc[0].values)
      build.extend(ram.loc[0].values)
      build.extend(hdd.loc[0].values)
      build.extend(['wihout', 0, 0, 0])
      build.append(random.randint(4300, 5000))
      build.append('game')

      build_with_bad_gpu.loc[ len(build_with_bad_gpu.index) ] = build
      build_bad_ssd.loc[ len(build_bad_ssd.index) ] = build
      if i % 2 == 0:
        target_ssd.loc[ len(target_ssd.index) ] = 0
      else:
        target_ssd.loc[ len(target_ssd.index) ] = 1

      build = []

      target.loc[ len(target.index) ] = ['ssd']



mbs = pd.read_excel('mb_am4.xlsx')
mbs = mbs[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]

r3 = pd.read_excel('r3_cpu.xlsx')
r3 = r3[column_cpu]

build = []
update = []
for index, cpu in r3.iterrows():
  for index, mb in mbs.iterrows():
    for i in range(10):
      build.extend(cpu.values)
      build.extend(mb.values)
      build.extend(gpu.loc[0].values)
      build.extend(ram.loc[0].values)
      build.extend(hdd.loc[0].values)
      build.extend(ssd.loc[0].values)
      build.append(random.randint(47900, 50000))
      build.append('game')

      build_with_bad_gpu.loc[ len(build_with_bad_gpu.index) ] = build
      build_bad_cpu.loc[ len(build_bad_cpu.index) ] = build
      if i % 2 == 0:
        target_cpu.loc[ len(target_cpu.index) ] = 'ryzen 5 5500'
      else:
        target_cpu.loc[ len(target_cpu.index) ] = 'ryzen 5 5600'

      build = []

      target.loc[ len(target.index) ] = ['cpu']

for col in cat_cols:
  col_values = pd.Series(build_with_bad_gpu[col].unique())
  build_with_bad_gpu[col] = build_with_bad_gpu[col].apply(lambda x: col_values[col_values == x].index[0])

builds = build_with_bad_gpu