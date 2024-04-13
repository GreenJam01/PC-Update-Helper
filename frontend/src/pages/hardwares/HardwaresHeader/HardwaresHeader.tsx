import { Link } from 'react-router-dom';
import { hardwares } from '../../../data/hardware-list';
import { AppRoutes } from '../../../constants';
import './Hardwares.css';

export function HardwareHeader(){
  return (
    <>
      {
        hardwares.map((i) => (
          <li className="hardware__item" key={i}>
            <Link className="hardware-link tabs__item" to={`${AppRoutes.HardwaresPage}/${i}`}>
              <span className='hardware-link__title'>{i}</span>
            </Link>
          </li>
        ))
      }
    </>


  );
}
