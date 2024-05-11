import pandas as pd
import numpy
import random

################################################################################
# Названия столбцов для датасетов продуктов
################################################################################
column_cpu = ['name', 'core', 'frequency', 'threads', 'soket', 'PCIE', 'cost']
column_mb = ['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']
column_gpu = ['gpu_name', 'gpu_chipset', 'gpu_interface', 'gpu_memery', 'gpu_cost']
column_ram = ['ram_name', 'ram_frequency', 'ram_volume', 'ram_num_ram', 'ram_cost']
column_hdd = ['hdd_name', 'hdd_volume', 'hdd_cost']
column_ssd = ['ssd_name', 'ssd_volume', 'ssd_frequency', 'ssd_cost']
################################################################################
# Названия столбцов для сборок (которые требуют апгрейда)
################################################################################
column_build = ['cpu_name', 'cpu_core', 'cpu_frequency', 'cpu_threads', 'cpu_soket', 'cpu_pcie', 'cpu_cost',
                  'mb_name', 'mb_soket', 'mb_chipset', 'mb_num_ram', 'mb_frequency_ram', 'mb_cost',
                  'gpu_name', 'gpu_chipset', 'gpu_interface', 'gpu_memory', 'gpu_cost',
                  'ram_name', 'ram_frequency', 'ram_volume', 'ram_num_ram', 'ram_cost',
                  'hdd_name', 'hdd_volume', 'hdd_cost',
                  'ssd_name', 'ssd_volume', 'ssd_frequency', 'ssd_cost',
                  'cost_update', 'goal'
                 ]
################################################################################
# Названия котегориальных столбцов
################################################################################
cat_cols = ['cpu_name', 'cpu_soket',
            'mb_name', 'mb_soket', 'mb_chipset',
            'gpu_name', 'gpu_chipset',
            'ram_name',
            'hdd_name',
            'ssd_name',
            'goal']
################################################################################
# Датасеты продуктов (комплектующих)
# ################################################################################
# r3 = pd.DataFrame()
r3 = pd.read_excel('./datasets/r3_cpu.xlsx')
r3 = r3[column_cpu]
r5 = pd.DataFrame(columns=column_cpu)
i5 = pd.DataFrame(columns=column_cpu)
# mb_am4 = pd.DataFrame()
# mb_lga1700 = pd.DataFrame()
mb_am4 = pd.read_excel(r'./datasets/mb_am4.xlsx')
mb_am4 = mb_am4[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]
mb_lga1700 = pd.read_excel(r'./datasets/mb_lga1700.xlsx')
mb_lga1700 = mb_lga1700[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]
gpu = pd.DataFrame(columns=column_gpu)
ram = pd.DataFrame(columns=column_ram)
hdd = pd.DataFrame(columns=column_hdd)
ssd = pd.DataFrame(columns=column_ssd)
################################################################################
# Датасеты для обучения моделей
################################################################################
builds = pd.DataFrame(columns=column_build)
target = pd.DataFrame(columns=['choose'])
target_cpu = pd.DataFrame(columns=['choose'])
build_bad_cpu = pd.DataFrame(columns=column_build)
target_gpu = pd.DataFrame(columns=['choose'])
build_bad_gpu = pd.DataFrame(columns=column_build)
target_ssd = pd.DataFrame(columns=['choose'])
build_bad_ssd = pd.DataFrame(columns=column_build)
target_cpu_gpu = pd.DataFrame(columns=['choose'])
build_bad_cpu_gpu = pd.DataFrame(columns=column_build)
################################################################################
# Здесь мы загружаем все отдельные датасеты
################################################################################
def loadAllDatasets():
  ################################################################################
  # Ryzen 3 dataset
  ################################################################################
  # r3 = pd.read_excel('./datasets/r3_cpu.xlsx')
  # r3 = r3[column_cpu]
  ################################################################################
  # Ryzen 5 dataset
  ################################################################################
  r5.loc[len(r5.index)] = ["ryzen 5 5500", 6, 4.2, 12, "am4", 3.0, 10590]
  r5.loc[len(r5.index)] = ["ryzen 5 5500GT", 6, 4.2, 12, "am4", 3.0, 10590]
  r5.loc[len(r5.index)] = ["ryzen 5 5600", 6, 4.4, 12, "am4", 4.0, 13590]
  r5.loc[len(r5.index)] = ["ryzen 5 5600G", 6, 4.4, 12, "am4", 3.0, 14690]
  r5.loc[len(r5.index)] = ["ryzen 5 5600X", 6, 4.6, 12, "am4", 4.0, 16990]
  r5.loc[len(r5.index)] = ["ryzen 5 5600GT", 6, 4.6, 12, "am4", 3.0, 17990]
  ################################################################################
  # Intel core 5 dataset
  ################################################################################
  i5.loc[len(i5.index)] = ["core i5 12400", 6, 4.4, 12, "LGA1700", 5.0, 17990]
  i5.loc[len(i5.index)] = ["core i5 12400F", 6, 4.4, 12, "LGA1700", 5.0, 15990]
  i5.loc[len(i5.index)] = ["core i5 12400T", 6, 4.2, 12, "LGA1700", 5.0, 22990]
  ################################################################################
  # matherboads dataset
  ################################################################################
  # mb_am4 = pd.read_excel(r'./datasets/mb_am4.xlsx')
  # mb_am4 = mb_am4[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]
  # mb_lga1700 = pd.read_excel(r'./datasets/mb_lga1700.xlsx')
  # mb_lga1700 = mb_lga1700[['name', 'soket', 'chipset', 'num_ram', 'frequency_ram', 'cost']]
  ################################################################################
  # gpu datasets
  ################################################################################
  gpu.loc[len(gpu.index)] = ['KFA2 GeForce GTX 1650 X Black', 'GTX 1650', 3.0, 4, 47900]
  gpu.loc[len(gpu.index)] = ['MSI NVIDIA GeForce RTX 2060 VENTUS GP OC', 'RTX 2060', 3.0, 6, 47900]
  gpu.loc[len(gpu.index)] = ['GIGABYTE NVIDIA GeForce RTX 4060 GV-N4060EAGLE OC-8GD', 'RTX 4060', 4.0, 8, 46200]
  ################################################################################
  # ram dataset
  ################################################################################
  ram.loc[len(ram.index)] = ['Kingston Fury Beast Black', 3200, 8, 2, 5990]
  ################################################################################
  # hdd datasets
  ################################################################################
  hdd.loc[len(hdd.index)] = ['WD Blue', 2048, 8290]
  ################################################################################
  # ssd datasets
  ################################################################################
  ssd.loc[len(ssd.index)] = ['Kingston A400', 480, 450, 4290]
  ssd.loc[len(ssd.index)] = ['Kingston A400', 240, 450, 3590]
################################################################################
# Здесь мы создаём датасет для обучения модели по выбору того, что нужно улучшить
################################################################################
def makeDataSet():
  build = []
################################################################################
# Общий датасет и датасет для улучшения видеокарты
################################################################################
  for index, cpu in r5.iterrows():
    for index, mb in mb_am4.iterrows():
      for i in range(10):
        build.extend(cpu.values)
        build.extend(mb.values)
        build.extend(gpu.loc[0].values)
        build.extend(ram.loc[0].values)
        build.extend(hdd.loc[0].values)
        build.extend(ssd.loc[0].values)
        build.append(random.randint(47900, 50000))
        build.append('game')
        builds.loc[ len(builds.index) ] = build
        build_bad_gpu.loc[ len(build_bad_gpu.index) ] = build
        target_gpu.loc[ len(target_gpu.index) ] = 1

        build = []

        target.loc[ len(target.index) ] = ['gpu']
################################################################################
# Общий датасет и датасет для улучшения видеокарты
################################################################################
  for index, cpu in i5.iterrows():
    for index, mb in mb_lga1700.iterrows():
      for i in range(10):
        build.extend(cpu.values)
        build.extend(mb.values)
        build.extend(gpu.loc[0].values)
        build.extend(ram.loc[0].values)
        build.extend(hdd.loc[0].values)
        build.extend(ssd.loc[0].values)
        build.append(random.randint(47900, 50000))
        build.append('game')

        builds.loc[ len(builds.index) ] = build
        build_bad_gpu.loc[ len(build_bad_gpu.index) ] = build
        if i % 2 == 0:
          target_gpu.loc[ len(target_gpu.index) ] = 1
        else:
          target_gpu.loc[ len(target_gpu.index) ] = 2

        build = []

        target.loc[ len(target.index) ] = ['gpu']
################################################################################
# Общий датасет и датасет для улучшения видеокарты и датасет для улучшения ссд
################################################################################
  build = []
  update = []
  for index, cpu in r5.iterrows():
    for index, mb in mb_am4.iterrows():
      for i in range(10):
        build.extend(cpu.values)
        build.extend(mb.values)
        build.extend(gpu.loc[0].values)
        build.extend(ram.loc[0].values)
        build.extend(hdd.loc[0].values)
        build.extend(['wihout', 0, 0, 0])
        build.append(random.randint(4300, 5000))
        build.append('game')

        builds.loc[ len(builds.index) ] = build
        build_bad_ssd.loc[ len(build_bad_ssd.index) ] = build
        if i % 2 == 0:
          target_ssd.loc[ len(target_ssd.index) ] = 0
        else:
          target_ssd.loc[ len(target_ssd.index) ] = 1

        build = []

        target.loc[ len(target.index) ] = ['ssd']
################################################################################
# Общий датасет и датасет для улучшения видеокарты и датасет для улучшения ссд
################################################################################
  build = []
  update = []
  for index, cpu in i5.iterrows():
    for index, mb in mb_lga1700.iterrows():
      for i in range(10):
        build.extend(cpu.values)
        build.extend(mb.values)
        build.extend(gpu.loc[0].values)
        build.extend(ram.loc[0].values)
        build.extend(hdd.loc[0].values)
        build.extend(['wihout', 0, 0, 0])
        build.append(random.randint(4300, 5000))
        build.append('game')

        builds.loc[ len(builds.index) ] = build
        build_bad_ssd.loc[ len(build_bad_ssd.index) ] = build
        if i % 2 == 0:
          target_ssd.loc[ len(target_ssd.index) ] = 0
        else:
          target_ssd.loc[ len(target_ssd.index) ] = 1

        build = []

        target.loc[ len(target.index) ] = ['ssd']
################################################################################
# Общий датасет и датасет для улучшения видеокарты и процессора
################################################################################
  build = []
  update = []
  for index, cpu in r3.iterrows():
    for index, mb in mb_am4.iterrows():
      for i in range(10):
        build.extend(cpu.values)
        build.extend(mb.values)
        build.extend(gpu.loc[0].values)
        build.extend(ram.loc[0].values)
        build.extend(hdd.loc[0].values)
        build.extend(ssd.loc[0].values)
        build.append(random.randint(47900, 50000))
        build.append('game')

        builds.loc[ len(builds.index) ] = build
        build_bad_cpu.loc[ len(build_bad_cpu.index) ] = build
        if i % 2 == 0:
          target_cpu.loc[ len(target_cpu.index) ] = 'ryzen 5 5500'
        else:
          target_cpu.loc[ len(target_cpu.index) ] = 'ryzen 5 5600'

        build = []

        target.loc[ len(target.index) ] = ['cpu']
  ################################################################################
  # датасет для обучения модели, которая выбирает, что нужно улучшить
  ################################################################################
  builds.to_excel('./datasets/X_chose_upgrade.xlsx')
  target.to_excel('./datasets/y_chose_upgrade.xlsx')
  ################################################################################
  # датасет для обучения модели, которая улучшает процессор
  ################################################################################
  build_bad_cpu.to_excel('./datasets/X_upgrade_cpu.xlsx')
  target_cpu.to_excel('./datasets/y_upgrade_cpu.xlsx')
  ################################################################################
  # датасет для обучения модели, которая улучшает видеокарту
  ################################################################################
  build_bad_gpu.to_excel('./datasets/X_upgrade_gpu.xlsx')
  target_gpu.to_excel('./datasets/y_upgrade_gpu.xlsx')
  ################################################################################
  # датасет для обучения модели, которая улучшает ссд диск
  ################################################################################
  build_bad_ssd.to_excel('./datasets/X_upgrade_ssd.xlsx')
  target_ssd.to_excel('./datasets/y_upgrade_ssd.xlsx')


loadAllDatasets()
makeDataSet()