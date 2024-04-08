import { HardwareType } from '../../types/hardwares';
import { HardwareCard } from '../hardwareCard/HardwareCard';

type HardwareListProps = {hardwares?: HardwareType[]; type:string}
export function HardwareList(props: HardwareListProps){
  const cards = props.hardwares?.map((i) =>
    (<HardwareCard key={i.id} hardware={i} type={props.type}/>));
  return (
    <div className='hardware-list'>
      {cards}
    </div>
  );

}
