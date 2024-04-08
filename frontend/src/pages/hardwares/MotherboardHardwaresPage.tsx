import { useState } from 'react';
import { HardwareList } from '../../components/hardwareList/HardwareList';
import { useAppSelector } from '../../hooks/use-app';
import { hardwaresSelectors } from '../../slices/hardwareSlice';
import { HardwareHeader } from './HardwaresHeader';
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
            <select onChange={(e) => setFilterMotherboard(e.target.value)}>
              {selectFilterOptions}
            </select>
            <section >
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
