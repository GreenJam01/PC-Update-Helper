import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle
from flask import Flask, request

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
################################################################################
# Модели
################################################################################
log_chose_upgrade = LogisticRegression()
log_upgrade_cpu = LogisticRegression()
log_upgrade_gpu = LogisticRegression()
log_upgrade_ssd = LogisticRegression()
################################################################################
# Загружаем модели
################################################################################
def loadModels():
    with open('choseModel.pkl', 'wb') as f:
        log_chose_upgrade = pickle.load(f)

    with open('cpuModel.pkl', 'wb') as f:
        log_upgrade_cpu = pickle.load(f)

    with open('gpuModel.pkl', 'wb') as f:
        log_upgrade_gpu = pickle.load(f)

    with open('ssdModel.pkl', 'wb') as f:
        log_upgrade_ssd = pickle.load(f)

app = Flask(__name__)

X_chose_upgrade = pd.DataFrame()
def load_builds():
    X_chose_upgrade = pd.read_excel('X_chose_upgrade')

load_builds()

@app.route('/prediction', methods=['GET'])
def prediction():
    column_sborka = ['cpu_name', 'mb_name', 'gpu_name', 'ram_name', 'hdd_name', 'ssd_name']
    str_sborka = request.args.get('sborka')
    df_sborka = pd.DataFrame(str_sborka.split('|'), columns=column_sborka)

    df_full_sborka = X_chose_upgrade[ X_chose_upgrade['cpu_name'] == df_sborka['cpu_name'] &
                                      X_chose_upgrade['mb_name'] == df_sborka['mb_name'] &
                                      X_chose_upgrade['gpu_name'] == df_sborka['gpu_name'] &
                                      X_chose_upgrade['ram_name'] == df_sborka['ram_name'] &
                                      X_chose_upgrade['hdd_name'] == df_sborka['hdd_name'] &
                                      X_chose_upgrade['ssd_name'] == df_sborka['ssd_name'] ]

    upgrade_chose = log_chose_upgrade.predict(df_full_sborka)
    match upgrade_chose:
        case ['cpu']:
            upgrade_cpu = log_upgrade_cpu.predict(df_full_sborka)
        case ['gpu']:
            upgrade_gpu = log_upgrade_gpu.predict(df_full_sborka)
        case ['ssd']:
            upgrade_ssd = log_upgrade_ssd.predict(df_full_sborka)

if __name__ == '__main__':
    app.run()