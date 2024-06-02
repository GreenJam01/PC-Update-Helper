import { useAppDispatch } from '../../hooks/use-app';
import { createAssembly, deleteAssembly } from '../../store/api-actions';
import { Assembly } from '../../types/assembly';
import { calculateTotalPrice } from '../../util/util';
import { useState } from 'react';
import { EditAssemblyCard } from './edit-assembly-card';
import axios from 'axios';
import { getRandomMotherboard, getRandomProcessor } from '../../data/hardware-list';
import { BeatLoader, ClipLoader } from 'react-spinners';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';

import './assembly-card.css'

type AssemblyCardProps = {
  assembly: Assembly;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AssemblyCard = ({assembly}:AssemblyCardProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [editModeOn, setEditModeOn ] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [predictionResult, setPredictionResult] = useState();
  const [open, setOpen] = React.useState(false);
  const clickAddAssemblyHandle = () => {
    dispatch(createAssembly(predictionResult));
  }
  const clickOfferHandle = async () => {
    try {
      setShowModal(true);
      // Формируем строку запроса
      setLoading(true);
      // Отправляем GET-запрос с помощью axios
      const response = await axios.post(`https://pc-update-helper-1.onrender.com/prediction`, assembly);
      // Сохраняем результат запроса в состоянии
      setPredictionResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };


  const handleClose = () => {
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
        : <EditAssemblyCard assembly={assembly} setEditMode={setEditModeOn}/>}
      <div>
        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {loading ? <ClipLoader color="#36d7b7" className='spinner'/> :
            <Box sx={style} className='assembly-table-wrapper'>
              <Typography id="modal-modal-title" variant="h6" component="h2" color={'black'}>
              Результат
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} color={'black'}>
                <table>
                  <tr className='assembly-table'>
                    <td></td>
                    <td className='assembly-table-title'>Изначальная сборка</td>
                    <td className='assembly-table-title'>Предложенная сборка</td>
                  </tr>
                  <tr className='assembly-table'>
                    <td className='assembly-table-item assembly-table-title'>CPU</td>
                    <td className='assembly-table-title'> {assembly.cpu.title}</td>
                    <td className='assembly-table-title'>{predictionResult?.cpu.title}</td>
                  </tr>
                  <tr className='assembly-table'>
                    <td className='assembly-table-item assembly-table-title'>GPU</td>
                    <td className='assembly-table-title'>{assembly.gpu.title}</td>
                    <td className='assembly-table-title'>{predictionResult?.gpu.title}</td>
                  </tr>
                  <tr className='assembly-table'>
                    <td className='assembly-table-item assembly-table-title'>RAM</td>
                    <td className='assembly-table-title'>{assembly.ram.title}</td>
                    <td className='assembly-table-title'>{predictionResult?.ram.title}</td>
                  </tr>
                  <tr className='assembly-table'>
                    <td className='assembly-table-item assembly-table-title'>HDD</td>
                    <td className='assembly-table-title'>{assembly.hdd.title}</td>
                    <td className='assembly-table-title'>{predictionResult?.hdd.title}</td>
                  </tr>
                  <tr className='assembly-table'>
                    <td className='assembly-table-item assembly-table-title'>Motherboard</td>
                    <td className='assembly-table-title'>{assembly.motherboard.title}</td>
                    <td className='assembly-table-title'>{predictionResult?.motherboard.title}</td>
                  </tr>
                </table>
                <Button disabled = {!assembly.cpu.visible}
                  className='assembly-table-button' onClick={clickAddAssemblyHandle}>Добавить в сборки</Button>
              </Typography>
            </Box>}
        </Modal>
      </div>

    </div>
  );
};
