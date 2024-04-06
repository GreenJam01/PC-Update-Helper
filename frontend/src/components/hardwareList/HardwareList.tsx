import { Hardware } from '../../types/hardwares';
import { HardwareCard } from '../hardwareCard/HardwareCard';

type HardwareListProps = {hardwares?: Hardware[]}
export function HardwareList(props: HardwareListProps){
  const cards = props.hardwares?.map((i) =>
    (<HardwareCard key={i.id} hardware={i} />));
  return (
    <div className='hardware-list'>
      {cards}
    </div>
  );

}
