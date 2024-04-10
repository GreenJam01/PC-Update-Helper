import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import './HardwaresPage.css'
import { Header } from '../../components/header/header';
export type MotherboardHardwarePageProps = {
  type: string;
}
export function MotherboardHardwaresPage(props:MotherboardHardwarePageProps){
  const motherboards = useAppSelector(hardwaresSelectors.motherboard);
  const brands = useAppSelector(hardwaresSelectors.getBrandsMotherboards);
  const [filterMotherboard, setFilterMotherboard] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<option key={brand} value={brand}> {brand} </option>))
    .concat(<option value=''>Без фильтра</option>).reverse();
  return (
    <div>
      <Header/>
      <main>
        <h1 className='componentTitle'>CPU</h1>
        <div>
          <section >
            <ul className='componentTitles'>
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div className='componentWrapper'>
          <div className='listWrapper'>
            <select className='listFilter' onChange={(e) => setFilterMotherboard(e.target.value)}>
              {selectFilterOptions}
            </select>
            <section className='hardware-listWrapper'>
              <HardwareList
                hardwares={motherboards.filter((i) => i.brand === filterMotherboard || filterMotherboard === '')}
                type ={props.type}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
