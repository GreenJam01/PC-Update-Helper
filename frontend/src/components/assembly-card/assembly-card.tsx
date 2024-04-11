import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/use-app';
import { deleteAssembly } from '../../store/api-actions';
import { Assembly } from '../../types/assembly';
import { calculateTotalPrice } from '../../util/util';

type AssemblyCardProps = {
    assembly: Assembly;
}

export const AssemblyCard = ({assembly}:AssemblyCardProps) => {
  const dispatch = useAppDispatch();
  return(
    <div className={'someAssembly'} key={assembly.id}>
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
    </div>
  );
};
