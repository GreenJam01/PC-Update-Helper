import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import recall_score, f1_score
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_validate
import random

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
# Датасеты для обучения моделей
################################################################################
X_chose_upgrade = pd.DataFrame()
y_chose_upgrade = pd.DataFrame()
X_upgrade_cpu = pd.DataFrame()
y_upgrade_cpu = pd.DataFrame()
X_upgrade_gpu = pd.DataFrame()
y_upgrade_gpu = pd.DataFrame()
X_upgrade_ssd = pd.DataFrame()
y_upgrade_ssd = pd.DataFrame()
################################################################################
# Здесь мы загружаем все датасеты для обучения
################################################################################
def loadTrainDatasets():
    X_chose_upgrade = pd.read_excel('X_chose_upgrade')
    y_chose_upgrade = pd.read_excel('y_chose_upgrade')
    X_upgrade_cpu = pd.read_excel('X_upgrade_cpu')
    y_upgrade_cpu = pd.read_excel('y_upgrade_cpu')
    X_upgrade_gpu = pd.read_excel('X_upgrade_gpu')
    y_upgrade_gpu = pd.read_excel('y_upgrade_gpu')
    X_upgrade_ssd = pd.read_excel('X_upgrade_ssd')
    y_upgrade_ssd = pd.read_excel('y_upgrade_ssd')
################################################################################
# тренируем модель, которая выбирает, что улучшить
################################################################################
def trainChoseModel():
    X_train_chose_upgrade, X_test_chose_upgrade, y_train_chose_upgrade, y_test_chose_upgrade = train_test_split(
        X_chose_upgrade, y_chose_upgrade, train_size=0.8)

    log_chose_upgrade = LogisticRegression()
    log_chose_upgrade.fit(X_train_chose_upgrade, y_train_chose_upgrade)
################################################################################
# тренируем модель, которая улучшает процессор
################################################################################
def trainUpgradeCpuModel():
    for col in cat_cols:
        col_values = pd.Series(X_upgrade_cpu[col].unique())
        X_upgrade_cpu[col] = X_upgrade_cpu[col].apply(lambda x: col_values[col_values == x].index[0])

    y_upgrade_cpu_values = pd.Series(y_upgrade_cpu['choose'].unique())
    y_upgrade_cpu['choose'] = y_upgrade_cpu['choose'].apply(
        lambda x: y_upgrade_cpu_values[y_upgrade_cpu_values == x].index[0])

    # делим датасет
    X_train_upgrade_cpu, X_test_upgrade_cpu, y_train_upgrade_cpu, y_test_upgrade_cpu = train_test_split(X_upgrade_cpu,
                                                                                                        y_upgrade_cpu,
                                                                                                        train_size=0.8)
    log_upgrade_cpu = LogisticRegression()
    log_upgrade_cpu.fit(X_train_upgrade_cpu, y_train_upgrade_cpu)
    upgrade_cpu_predictions = log_upgrade_cpu.predict(X_test_upgrade_cpu)
################################################################################
# тренируем модель, которая улучшает видеокарту
################################################################################
def trainUpgradeGpuModel():
    for col in cat_cols:
        col_values = pd.Series(X_upgrade_gpu[col].unique())
        X_upgrade_gpu[col] = X_upgrade_gpu[col].apply(lambda x: col_values[col_values == x].index[0])

    y_upgrade_gpu_values = pd.Series(y_upgrade_gpu['choose'].unique())
    y_upgrade_gpu['choose'] = y_upgrade_gpu['choose'].apply(
        lambda x: y_upgrade_gpu_values[y_upgrade_gpu_values == x].index[0])

    # делим датасет
    X_train_upgrade_gpu, X_test_upgrade_gpu, y_train_upgrade_gpu, y_test_upgrade_gpu = train_test_split(X_upgrade_gpu,
                                                                                                        y_upgrade_gpu,
                                                                                                        train_size=0.8)
    log_upgrade_gpu = LogisticRegression()
    log_upgrade_gpu.fit(X_train_upgrade_gpu, y_train_upgrade_gpu)
    upgrade_gpu_predictions = log_upgrade_gpu.predict(X_test_upgrade_gpu)
################################################################################
# тренируем модель, которая улучшает ссд диск
################################################################################
def trainUpgradeSSDModel():
    for col in cat_cols:
        col_values = pd.Series(X_upgrade_ssd[col].unique())
        X_upgrade_ssd[col] = X_upgrade_ssd[col].apply(lambda x: col_values[col_values == x].index[0])

    y_upgrade_ssd_values = pd.Series(y_upgrade_gpu['choose'].unique())
    y_upgrade_ssd['choose'] = y_upgrade_ssd['choose'].apply(
        lambda x: y_upgrade_ssd_values[y_upgrade_ssd_values == x].index[0])

    # делим датасет
    X_train_upgrade_ssd, X_test_upgrade_ssd, y_train_upgrade_ssd, y_test_upgrade_ssd = train_test_split(X_upgrade_ssd,
                                                                                                        y_upgrade_ssd,
                                                                                             train_size=0.2)
    log_upgrade_ssd = LogisticRegression()
    log_upgrade_ssd.fit(X_train_upgrade_ssd, y_train_upgrade_ssd)
    upgrade_ssd_predictions = log_upgrade_ssd.predict(X_test_upgrade_ssd)

