import { HardwareList } from "../../components/hardwareList/HardwareList";
import { HardwareHeader } from "./HardwaresHeader";
import "./Hardwares.css"

export function HardwaresPage(){
    return (
        <div>
        <main>
          <h1 className="hardwareTitle">Hardwares</h1>
          <div>
            <section >
              <ul className="hardwareList">
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