import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import './CPUHardwaresPage.css'
export type CPUHardwarePageProps = {
  type: string;
}
export function CPUHardwaresPage(props:CPUHardwarePageProps){
  const cpus = useAppSelector(hardwaresSelectors.cpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsCpu);
  const [filterCpu, setFilterCpu] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<option key={brand} value={brand}> {brand} </option>))
    .concat(<option value=''>Без фильтра</option>).reverse();
  return (
    <div>
      <main>
        <h1 className='componentTitle'>CPU</h1>
        <div>
          <section>
            <ul className='componentTitles'>
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div className='componentWrapper'>
          <div className='listWrapper'>
            <select className='listFilter' onChange={(e) => setFilterCpu(e.target.value)}>
              {selectFilterOptions}
            </select>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={cpus.filter((i) => i.brand === filterCpu || filterCpu === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
