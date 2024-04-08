import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
export type CPUHardwarePageProps = {
  type: string;
}
export function CPUHardwaresPage(props:CPUHardwarePageProps){
  const cpus = useAppSelector(hardwaresSelectors.cpu);
  const brands = useAppSelector(hardwaresSelectors.getBrandsCpu);
  const [filterCpu, setFilterCpu] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<option key={brand} value={brand}> {brand} </option>))
    .concat(<option value=''>Без фильтра</option>).reverse();
  return (
    <div>
      <main>
        <h1>CPU</h1>
        <div>
          <section >
            <ul >
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div >
          <div>
            <select onChange={(e) => setFilterCpu(e.target.value)}>
              {selectFilterOptions}
            </select>
            <section >
              <HardwareList hardwares={cpus.filter((i) => i.brand === filterCpu || filterCpu === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
