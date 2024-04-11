import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import './HardwaresPage.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Header } from '../../components/header/header';
export type CPUHardwarePageProps = {
  type: string;
}
export function CPUHardwaresPage(props:CPUHardwarePageProps){
  const cpus = useAppSelector(hardwaresSelectors.cpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsCpu);
  const [filterCpu, setFilterCpu] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value=''>Без фильтра</MenuItem>).reverse();
  return (
    <div>
      <Header/>
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
            <Select className='listFilter' onChange={(e) => setFilterCpu(e.target.value)}>
              {selectFilterOptions}
            </Select>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={cpus.filter((i) => i.brand === filterCpu || filterCpu === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
