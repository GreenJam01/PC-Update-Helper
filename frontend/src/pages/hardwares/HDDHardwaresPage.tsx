import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
export type HDDHardwarePageProps = {
  type: string;
}
export function HDDHardwaresPage(props:HDDHardwarePageProps){
  const hdds = useAppSelector(hardwaresSelectors.hdd);
  const brands = useAppSelector(hardwaresSelectors.getBrandsHdd);
  const [filterHdd, setFilterHdd] = useState<(string)>('');
  const selectFilterOptions = brands.map((brand) =>
    (<option key={brand} value={brand}> {brand} </option>))
    .concat(<option value=''>Без фильтра</option>).reverse();
  return (
    <div>
      <main>
        <h1>HDD</h1>
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
              <select onChange={(e) => setFilterHdd(e.target.value)}>
                {selectFilterOptions}
              </select>
              <HardwareList hardwares={hdds.filter((i) => i.brand === filterHdd || filterHdd === '')} type ={props.type} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
