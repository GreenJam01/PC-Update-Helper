import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader/HardwaresHeader';
import './HardwaresPage.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Header } from '../../components/header/header';
import { SortForm } from '../../components/sort-form/sort-form';
import { filterLess } from '../../constants';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import FormControl from '@mui/material/FormControl/FormControl';
export type CPUHardwarePageProps = {
  type: string;
}
export function CPUHardwaresPage(props:CPUHardwarePageProps){
  const cpus = useAppSelector(hardwaresSelectors.getCpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsCpu);
  const [filterCpu, setFilterCpu] = useState<(string)>(filterLess);
  const selectFilterOptions = brands.map((brand) =>
    (<MenuItem key={brand} value={brand}> {brand} </MenuItem>))
    .concat(<MenuItem value={filterLess}>Без фильтра</MenuItem>).reverse();
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">Фильтр</InputLabel>
              <Select onChange={(e) => setFilterCpu(e.target.value as string)}>
                {selectFilterOptions}
              </Select>
            </FormControl>
            <SortForm/>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={cpus.filter((i) => i.brand === filterCpu || filterCpu === filterLess)} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
