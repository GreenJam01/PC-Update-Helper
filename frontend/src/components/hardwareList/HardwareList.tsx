import { BeatLoader } from 'react-spinners';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareType } from '../../types/hardwares';
import { HardwareCard } from '../hardware-card/HardwareCard';

type HardwareListProps = {hardwares?: HardwareType[]; type:string}
export function HardwareList(props: HardwareListProps){
  const isHardwareDataLoading = useAppSelector(hardwaresSelectors.isHardwareDataLoading);
  const cards = props.hardwares?.map((i) =>
    (<HardwareCard key={i.id} hardware={i} type={props.type}/>));
  return (
    <section className='hardware-listWrapper'>
      <div className='hardware-list'>
        {isHardwareDataLoading ? <BeatLoader color="#36d7b7" /> : cards}
      </div>
    </section>
  );

}
