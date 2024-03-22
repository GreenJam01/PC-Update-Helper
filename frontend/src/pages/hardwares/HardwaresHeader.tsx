import { setHardware } from "../../actions/action";
import { hardwares } from "../../data/hardware-list";
import { useAppDispatch } from "../../hooks/use-app";

export function HardwareHeader(){
    const dispatch = useAppDispatch();
    return (
      <>
      {
        hardwares.map((i) => (
            <li className="hardware__item" key={i}>
        <a className="hardware-link tabs__item" onClick={()=> dispatch(setHardware(i))}>
          <span>{i}</span>
        </a>
            </li>
        ))
      }
        </>
        
        
    );
}