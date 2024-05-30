import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader/HardwaresHeader';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './HardwaresPage.css';
import Header from '../../components/header/header';
import { SortForm } from '../../components/sort-form/sort-form';
import { filterLess } from '../../constants';
export type GPUHardwarePageProps = {
  type: string;
}
export function GPUHardwaresPage(props:GPUHardwarePageProps){
  const gpus = useAppSelector(hardwaresSelectors.getGpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsGpu);
  const [filterGpu, setFilterGpu] = useState<(string)>(filterLess);
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value={filterLess}>Без фильтра</MenuItem>).reverse();
  return (
    <div>
      <Header/>
      <main>
        <h1 className='componentTitle'>GPU</h1>
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
              <Select onChange={(e) => setFilterGpu(e.target.value as string)}>
                {selectFilterOptions}
              </Select>
            </FormControl>
            <SortForm/>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={gpus.filter((i) => i.brand === filterGpu || filterGpu === filterLess)} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
