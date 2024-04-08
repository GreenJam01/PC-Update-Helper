
import { Link } from 'react-router-dom';
import { hardwares } from '../../data/hardware-list';
import { AppRoutes } from '../../constants';

export function HardwareHeader(){
  return (
    <>
      {
        hardwares.map((i) => (
          <li className="hardware__item" key={i}>
            <Link className="hardware-link tabs__item" to={`${AppRoutes.HardwaresPage}/${i}`}>
              <span>{i}</span>
            </Link>
          </li>
        ))
      }
    </>


  );
}
