import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader/HardwaresHeader';
import './HardwaresPage.css';
import Header from '../../components/header/header';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { filterLess } from '../../constants';
import { SortForm } from '../../components/sort-form/sort-form';
export type HDDHardwarePageProps = {
  type: string;
}
export function HDDHardwaresPage(props:HDDHardwarePageProps){
  const hdds = useAppSelector(hardwaresSelectors.getHdd);
  const brands = useAppSelector(hardwaresSelectors.getBrandsHdd);
  const [filterHdd, setFilterHdd] = useState<(string)>(filterLess);
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value={filterLess}>Без фильтра</MenuItem>).reverse();
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">Фильтр</InputLabel>
              <Select onChange={(e) => setFilterHdd(e.target.value as string)}>
                {selectFilterOptions}
              </Select>
            </FormControl>
            <SortForm/>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={hdds.filter((i) => i.brand === filterHdd || filterHdd === filterLess)} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
