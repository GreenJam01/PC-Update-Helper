import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import { MenuItem, Select } from '@mui/material';
import './HardwaresPage.css';
import { Header } from '../../components/header/header';
export type GPUHardwarePageProps = {
  type: string;
}
export function GPUHardwaresPage(props:GPUHardwarePageProps){
  const gpus = useAppSelector(hardwaresSelectors.gpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsGpu);
  const [filterGpu, setFilterGpu] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value=''>Без фильтра</MenuItem>).reverse();
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
            <Select className='listFilter' onChange={(e) => setFilterGpu(e.target.value as string)}>
              {selectFilterOptions}
            </Select>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={gpus.filter((i) => i.brand === filterGpu || filterGpu === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
