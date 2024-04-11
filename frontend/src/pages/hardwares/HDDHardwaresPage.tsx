import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import './HardwaresPage.css';
import { Header } from '../../components/header/header';
import { MenuItem, Select } from '@mui/material';
export type HDDHardwarePageProps = {
  type: string;
}
export function HDDHardwaresPage(props:HDDHardwarePageProps){
  const hdds = useAppSelector(hardwaresSelectors.hdd);
  const brands = useAppSelector(hardwaresSelectors.getBrandsHdd);
  const [filterHdd, setFilterHdd] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value=''>Без фильтра</MenuItem>).reverse();
  return (
    <div>
      <Header/>
      <main>
        <h1 className='componentTitle'>HDD</h1>
        <div>
          <section >
            <ul className='componentTitles'>
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div className='componentWrapper'>
          <div className='listWrapper'>
            <Select className='listFilter' onChange={(e) => setFilterHdd(e.target.value as string)}>
              {selectFilterOptions}
            </Select>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={hdds.filter((i) => i.brand === filterHdd || filterHdd === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
