import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
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
      <main>
        <h1>GPU</h1>
        <div>
          <section >
            <ul >
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div >
          <div>
            <select onChange={(e) => setFilterGpu(e.target.value)}>
              {selectFilterOptions}
            </select>
            <section >
              <HardwareList hardwares={gpus.filter((i) => i.brand === filterGpu || filterGpu === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
