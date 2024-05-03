import { useState } from 'react';
import { HardwareType } from '../../types/hardwares';
import './star.css';
import { useAppDispatch } from '../../hooks/use-app';
import { hardwaresActions } from '../../slices/hardwareSlice';
type StarButtonProps = {
  hardware: HardwareType;
}
export function StarButton({hardware} : StarButtonProps){
  const [isFavorite, setIsFavorite] = useState<boolean>(hardware.isFavorite);
  const dispatch = useAppDispatch();
  const buttonClickHandler = () => {
    dispatch(hardwaresActions.setHardware({...hardware, isFavorite: !isFavorite}));
    setIsFavorite(!isFavorite);
  };
  return(
    <button className={`ussr-star ${isFavorite && 'ussr-star__active'}`}
      onClick={buttonClickHandler}
    >
    </button>
  );
}
