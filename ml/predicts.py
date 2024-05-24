import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

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
with open('choseModel.sav', 'rb') as f1:
    log_chose_upgrade = pickle.load(f1)

with open('cpuModel.sav', 'rb') as f2:
    log_upgrade_cpu = pickle.load(f2)

with open('gpuModel.sav', 'rb') as f3:
    log_upgrade_gpu = pickle.load(f3)

with open('ssdModel.sav', 'rb') as f4:
    log_upgrade_ssd = pickle.load(f4)

# def loadModels():
#     with open('choseModel.pkl', 'wb') as f:
#         log_chose_upgrade = pickle.load(f)
#
#     with open('cpuModel.pkl', 'wb') as f:
#         log_upgrade_cpu = pickle.load(f)
#
#     with open('gpuModel.pkl', 'wb') as f:
#         log_upgrade_gpu = pickle.load(f)
#
#     with open('ssdModel.pkl', 'wb') as f:
#         log_upgrade_ssd = pickle.load(f)

# def loadDatasets():
#   builds = pd.read_csv('./datasets/X_chose_upgrade.csv')
#   target = pd.read_csv('./datasets/y_chose_upgrade.csv')
#   target_cpu = pd.read_csv('./datasets/y_upgrade_cpu.csv')
#   target_gpu = pd.read_csv('./datasets/y_upgrade_gpu.csv')
#   target_ssd = pd.read_csv('./datasets/y_upgrade_ssd.csv')
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
# Необходимые для предсказания датасеты
################################################################################
builds = pd.read_excel('./datasets/X_chose_upgrade.xlsx')
target = pd.read_excel('./datasets/y_chose_upgrade.xlsx')
target_cpu = pd.read_excel('./datasets/y_upgrade_cpu.xlsx')
target_gpu = pd.read_excel('./datasets/y_upgrade_gpu.xlsx')
target_ssd = pd.read_excel('./datasets/y_upgrade_ssd.xlsx')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/prediction', methods=['GET'])
@cross_origin()
def prediction():
  # Загружаем сборку и преобразуем её в датасет
  str_sborka = str(request.args.get('sborka'))
  column_sborka = ['cpu_name', 'mb_name', 'gpu_name', 'ram_name', 'hdd_name', 'ssd_name']
  df_sborka = pd.DataFrame(columns=column_sborka)
  df_sborka.loc[ len(df_sborka.index) ] = str_sborka.split('|')

  # Получаем всю необходимую информацию для обучения
  df_full_sborka = builds[ (builds['cpu_name'] == df_sborka.loc[0, 'cpu_name'])].head(1)

  # Преобразуем категориальные столбцы для обучения
  df_full_sborka_for_train = df_full_sborka.copy()
  target_values = pd.Series(target['choose'].unique())
  target['choose'] = target['choose'].apply(lambda x: target_values[target_values == x].index[0])
  for col in cat_cols:
    col_values = pd.Series(builds[col].unique())
    df_full_sborka_for_train[col] = df_full_sborka_for_train[col].apply(lambda x: col_values[col_values == x].index[0])

  chose_change = target_values.loc[log_chose_upgrade.predict(df_full_sborka_for_train.head(1))].values[0]

  match chose_change:
    case 'cpu':
      print('here')
      chose_new_cpu = log_upgrade_cpu.predict(df_full_sborka_for_train)
      df_sborka.loc[0, 'cpu_name'] = target_cpu.loc[chose_new_cpu, 'choose'].values[0]
    case 'gpu':
      chose_new_gpu = log_upgrade_gpu.predict(df_full_sborka_for_train)
      df_sborka.loc[0, 'gpu_name'] = target_gpu.loc[chose_new_gpu, 'choose'].values[0]
    case 'ssd':
      chose_new_ssd = log_upgrade_ssd.predict(df_full_sborka_for_train)
      df_sborka.loc[0, 'ssd_name'] = target_ssd.loc[chose_new_ssd, 'choose'].values[0]

  # new_sborka = ''
  # for el in df_sborka.loc[0].values:
  #   new_sborka += el
  #   new_sborka += '|'

  return jsonify(df_sborka.head(1).values.tolist())

if __name__ == '__main__':
    app.run()