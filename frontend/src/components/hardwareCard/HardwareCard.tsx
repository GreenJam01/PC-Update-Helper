import { Link } from 'react-router-dom';
import { HardwareType } from '../../types/hardwares';
import { AppRoutes } from '../../constants';

type HardwareCardProps = {hardware: HardwareType; type: string}
export function HardwareCard(props: HardwareCardProps){
  return(
    <Link to={`${AppRoutes.HardwaresPage}/${props.type}/${props.hardware.id}`}>
      <article
        className={'hardware__card'}
      >
        <div className={'hardware__image-wrapper hardware-card__image-wrapper'}>
          <img className="hardware-card__image" src={props.hardware.urlImage} width="260" height="200" alt="hardware image"/>
        </div>
        <div className="hardware-card__info">
          <div className="hardware-card__price-wrapper">
            <div className="hardware-card__price">
              <b className="hardware-card__price-value">{props.hardware.price}</b>
            </div>
          </div>
          <h2 className="hardware-card__name">
            <a href="#">{props.hardware.title}</a>
          </h2>
        </div>
      </article>
    </Link>
  );
}
