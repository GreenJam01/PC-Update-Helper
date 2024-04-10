import { Link } from 'react-router-dom';
import { HardwareType } from '../../types/hardwares';
import { AppRoutes } from '../../constants';
import './HardwareCard.css';
type HardwareCardProps = {hardware: HardwareType; type: string}
export function HardwareCard(props: HardwareCardProps){
  return(
    <Link className='hardware__card__wrapper' to={`${AppRoutes.HardwaresPage}/${props.type}/${props.hardware.id}`}>
      <article
        className={'hardware__card'}
      >
        <div className={'hardware__image-wrapper hardware-card__image-wrapper'}>
          <img className="hardware-card__image" src={props.hardware.urlImage} width="260" height="200" alt="hardware image"/>
        </div>
        <div className="hardware-card__info">
          <div className="hardware-card__price-wrapper">
            <div className="hardware-card__price">
              <b className="hardware-card__price-value">Цена - {props.hardware.price} руб.</b>
            </div>
          </div>
          <h2 className="hardware-card__name">
            <a href="#" className='hardware-card__name-text'>{props.hardware.title}</a>
          </h2>
          <div className="hardware-card__name">
            <a href="#" className='hardware-card__name-text hardware-card__name-text-brand'>{props.hardware.brand}</a>
          </div>
          {props.type === 'cpu' &&
          <>
            <div className="hardware-card__name">
              <a href="#" className='hardware-card__name-text'>Частота - {props.hardware.frequency} ГГц</a>
            </div>
            <div className="hardware-card__name">
              <a href="#" className='hardware-card__name-text'>Число ядер - {props.hardware.coresNumber}</a>
            </div>
            <div className="hardware-card__name">
              <a href="#" className='hardware-card__name-text'>Число потоков - {props.hardware.threadsNumber}</a>
            </div>
          </>}
        </div>
      </article>
    </Link>
  );
}
