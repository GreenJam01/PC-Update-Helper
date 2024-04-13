import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { Assembly } from '../../types/assembly';
import SelectMui from '../select-mui/select-mui';
import { Button } from '@mui/material';
import { putAssembly } from '../../store/api-actions';

type EditAssemblyCard = {
    assembly: Assembly;
    setEditMode: (arg0: boolean) => void;
}

export const EditAssemblyCard = ({assembly, setEditMode}:EditAssemblyCard) => {
  const cpus = useAppSelector(hardwaresSelectors.getCpu);
  const gpus = useAppSelector(hardwaresSelectors.getGpu);
  const rams = useAppSelector(hardwaresSelectors.getRam);
  const motherboards = useAppSelector(hardwaresSelectors.getMotherboard);
  const hdds = useAppSelector(hardwaresSelectors.getHdd);
  const [cpu, setCpu] = useState(assembly.cpu);
  const [gpu, setGpu] = useState(assembly.gpu);
  const [ram, setRam] = useState(assembly.ram);
  const [motherboard, setMotherboard] = useState(assembly.motherboard);
  const [hdd, setHdd] = useState(assembly.hdd);
  const dispatch = useAppDispatch();
  const handleSave = () => {
    dispatch(putAssembly({id: assembly.id, cpu: cpu, gpu: gpu, hdd: hdd, motherboard: motherboard, ram: ram}));
    setEditMode(false);
  };
  return(
    <div className={'someAssembly'}>
      <SelectMui label='Материнская плата' setValue={setMotherboard} options={motherboards} value={motherboard} />
      <SelectMui label='Процессор' setValue={setCpu} options={cpus} value={cpu} />
      <SelectMui label='Оперативная память' setValue={setRam} options={rams} value={ram} />
      <SelectMui label='Видеокарта' setValue={setGpu} options={gpus} value={gpu} />
      <SelectMui label='Жесткий диск' setValue={setHdd} options={hdds} value={hdd} />
      <Button onClick={() => {
        setEditMode(false);
      }}
      >
                Назад
      </Button>
      <Button onClick={handleSave}>
                Сохранить
      </Button>
    </div>
  );

};
