import { HardwareList } from "../../components/hardwareList/HardwareList";
import { HardwareHeader } from "./HardwaresHeader";

export function HardwaresPage(){
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
                 <HardwareList /> 
              </section>
            </div>
          </div>
        </main>
      </div>
    )
}