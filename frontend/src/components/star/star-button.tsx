import { useState } from 'react';
import { HardwareType } from '../../types/hardwares';
import './star.css';
import { useAppDispatch } from '../../hooks/use-app';
import { hardwaresActions } from '../../slices/hardwareSlice';
import { postFavoriteMotherboard, postFavoriteCpu, postFavoriteGpu, postFavoriteHdd, postFavoriteRam } from '../../store/api-actions';
import { isCPU, isGPU, isHDD, isRAM, isMotherboard } from '../../util/util';
type StarButtonProps = {
  hardware: HardwareType;
}
export function StarButton({hardware} : StarButtonProps){
  const [isFavorite, setIsFavorite] = useState<boolean>(hardware.favorite);
  const dispatch = useAppDispatch();
  const buttonClickHandler = () => {
    if(isCPU(hardware)) {
      dispatch(postFavoriteCpu(hardware));
    } else if (isGPU(hardware)){
      dispatch(postFavoriteGpu(hardware));
    } else if (isHDD(hardware)){
      dispatch(postFavoriteHdd(hardware));
    } else if (isRAM(hardware)){
      dispatch(postFavoriteRam(hardware));
    } else if (isMotherboard(hardware)){
      dispatch(postFavoriteMotherboard(hardware));
    }
    dispatch(postFavoriteCpu(hardware));
    dispatch(hardwaresActions.setHardware({...hardware, favorite: !isFavorite}));
    setIsFavorite(!isFavorite);
  };
  return(
    <button className={`ussr-star ${isFavorite && 'ussr-star__active'}`}
      onClick={buttonClickHandler}
    >
    </button>
  );
}
