import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/use-app';
import { deleteAssembly } from '../../store/api-actions';
import { Assembly } from '../../types/assembly';
import { calculateTotalPrice } from '../../util/util';
import { useState } from 'react';
import { EditAssemblyCard } from './edit-assembly-card';
import './assembly-card.css';
import axios from 'axios';

type AssemblyCardProps = {
  assembly: Assembly;
}

export const AssemblyCard = ({assembly}:AssemblyCardProps) => {
  const [editModeOn, setEditModeOn ] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  const clickOfferHandle = async () => {
    try {
      // Формируем строку запроса
      const requestString = `AMD 2200G|ASUS PRIME A320M-K/CSM|KFA2 GeForce GTX 1650 X Black|Kingston Fury Beast Black|WD Blue|Kingston A400`;

      // Отправляем GET-запрос с помощью axios
      const response = await axios.get(`http://127.0.0.1:5000/prediction?sborka=${requestString}`);

      // Сохраняем результат запроса в состоянии
      setPredictionResult(response.data);
      setShowModal(true);

    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  const dispatch = useAppDispatch();

  const closeModal = () => {
    setShowModal(false);
  };

  return(
    <div>
      {!editModeOn ?
        <div className={'someAssembly'} >
          <p>Материнская плата: {assembly.motherboard?.title}</p>
          <p>Процессор: {assembly.cpu?.title}</p>
          <p>Оперативная память: {assembly.ram?.title}</p>
          <p>Видеокарта: {assembly.gpu?.title}</p>
          <p>HDD: {assembly.hdd?.title}</p>
          <p>Общая цена: {calculateTotalPrice(assembly)} рублей</p>
          <Button onClick={() => {
            dispatch(deleteAssembly(assembly));
          }}
          >
            Удалить
          </Button>
          <Button onClick={() => {
            setEditModeOn(true);
          }}
          >
            Редактировать
          </Button>
          <Button onClick={clickOfferHandle}>
            Предложить другую сборку
          </Button>
        </div>
        : <EditAssemblyCard assembly={assembly} setEditMode={setEditModeOn}/>
      }

      {/* Модальное окно */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Результат:</h2>
            <p>{predictionResult}</p>
          </div>
        </div>
      )}
    </div>
  );
};