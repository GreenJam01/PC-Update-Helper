import { HardwareList } from '../../components/hardwareList/HardwareList';
import { HardwaresType } from '../../types/hardwares';
import { HardwareHeader } from './HardwaresHeader';
export type HardwarePageProps = {
  hardwares: HardwaresType;
}
export function HardwaresPage(props:HardwarePageProps){
  return (
    <div>
      <main>
        <h1>Hardwares</h1>
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
              {/* <SortForm/> */}
              <HardwareList hardwares={props.hardwares} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
