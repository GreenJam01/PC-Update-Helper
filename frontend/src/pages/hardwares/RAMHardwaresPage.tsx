/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';


export type RAMHardwarePageProps = {
  type: string;
}
export function RAMHardwaresPage(props:RAMHardwarePageProps){
  const rams = useAppSelector(hardwaresSelectors.ram);
  const brands = useAppSelector(hardwaresSelectors.getBrandsRam);
  const [filterRam, setFilterRam] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<option key={brand} value={brand}> {brand} </option>))
    .concat(<option value=''>Без фильтра</option>).reverse();
  return (
    <div>
      <main>
        <h1>RAM</h1>
        <div>
          <section >
            <ul >
              <HardwareHeader/>
            </ul>
          </section>
        </div>
        <div >
          <div>
            <section >
              <select onChange={(e) => setFilterRam(e.target.value)}>
                {selectFilterOptions}
              </select>
              <HardwareList hardwares={rams.filter((i) => i.brand === filterRam || filterRam === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
