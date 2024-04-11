/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import './HardwaresPage.css'
import { Header } from '../../components/header/header';
import { MenuItem, Select } from '@mui/material';
export type RAMHardwarePageProps = {
  type: string;
}
export function RAMHardwaresPage(props:RAMHardwarePageProps){
  const rams = useAppSelector(hardwaresSelectors.ram);
  const brands = useAppSelector(hardwaresSelectors.getBrandsRam);
  const [filterRam, setFilterRam] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value=''>Без фильтра</MenuItem>).reverse();
  return (
    <div>
      <Header/>
      <main>
        <h1 className='componentTitle'>RAM</h1>
        <div>
          <section >
            <ul className='componentTitles'>
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div className='componentWrapper'>
          <div className='listWrapper'>
          <Select className='listFilter' onChange={(e) => setFilterRam(e.target.value)}>
              {selectFilterOptions}
            </Select>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={rams.filter((i) => i.brand === filterRam || filterRam === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
