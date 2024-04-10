import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
import './HardwaresPage.css'
import { Header } from '../../components/header/header';
export type GPUHardwarePageProps = {
  type: string;
}
export function GPUHardwaresPage(props:GPUHardwarePageProps){
  const gpus = useAppSelector(hardwaresSelectors.gpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsGpu);
  const [filterGpu, setFilterGpu] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<option key={brand} value={brand}> {brand} </option>))
    .concat(<option value=''>Без фильтра</option>).reverse();
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
            <select className='listFilter' onChange={(e) => setFilterGpu(e.target.value)}>
              {selectFilterOptions}
            </select>
            <section className='hardware-listWrapper'>
              <HardwareList hardwares={gpus.filter((i) => i.brand === filterGpu || filterGpu === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
