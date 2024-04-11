import { Link } from 'react-router-dom';
import { HardwareType } from '../../types/hardwares';
import { AppRoutes } from '../../constants';
import './HardwareCard.css';
import { getDefaultHardwareImage } from '../../util/util';
type HardwareCardProps = {hardware: HardwareType; type: string}
export function HardwareCard({hardware, type}: HardwareCardProps){
  return(
    <Link className='hardware__card__wrapper' to={`${AppRoutes.HardwaresPage}/${type}/${hardware.id}`}>
      <article
        className={'hardware__card'}
      >
        <div className={'hardware__image-wrapper hardware-card__image-wrapper'}>
          <img className="hardware-card__image" src={getDefaultHardwareImage(type)} width="260" height="200" alt="hardware image"/>
        </div>
        <div className="hardware-card__info">
          <div className="hardware-card__price-wrapper">
            <div className="hardware-card__price">
              <b className="hardware-card__price-value">Цена - {hardware.price} руб.</b>
            </div>
          </div>
          <h2 className="hardware-card__name">
            <a href="#" className='hardware-card__name-text'>{hardware.title}</a>
          </h2>
          <div className="hardware-card__name">
            <a href="#" className='hardware-card__name-text hardware-card__name-text-brand'>{hardware.brand}</a>
          </div>
          {'frequency' in hardware && 'coresNumber' in hardware && 'threadsNumber' in hardware &&
          <>
            <div className="hardware-card__name">
              <a href="#" className='hardware-card__name-text'>Частота - {hardware.frequency} ГГц</a>
            </div>
            <div className="hardware-card__name">
              <a href="#" className='hardware-card__name-text'>Число ядер - {hardware.coresNumber}</a>
            </div>
            <div className="hardware-card__name">
              <a href="#" className='hardware-card__name-text'>Число потоков - {hardware.threadsNumber}</a>
            </div>
          </>}
          {'memoryVolume' in hardware &&
'memoryFrequency' in hardware &&
'busWidth' in hardware &&
            <>
              <div className="hardware-card__name">
                <a href="#" className='hardware-card__name-text'>Частота памяти - {hardware.memoryFrequency} ГГц</a>
              </div>
              <div className="hardware-card__name">
                <a href="#" className='hardware-card__name-text'>Память - {hardware.memoryVolume}</a>
              </div>
              <div className="hardware-card__name">
                <a href="#" className='hardware-card__name-text'>Размер шины - {hardware.busWidth}</a>
              </div>
            </>}
          {'volume' in hardware && 'frequency' in hardware &&
            <>
              <div className="hardware-card__name">
                <a href="#" className='hardware-card__name-text'>Частота - {hardware.frequency} ГГц</a>
              </div>
              <div className="hardware-card__name">
                <a href="#" className='hardware-card__name-text'>Ширина шины - {hardware.volume}</a>
              </div>
            </>}
          {
            'memory' in hardware &&
              'anInterface' in hardware &&
              <>
                <div className="hardware-card__name">
                  <a href="#" className='hardware-card__name-text'>Память - {hardware.memory}</a>
                </div>
                <div className="hardware-card__name">
                  <a href="#" className='hardware-card__name-text'>Частота - {hardware.maxReadingSpeed}</a>
                </div>
              </>
          }
          {
            'socket' in hardware &&
            'memoryType' in hardware &&
            'maxMemory' in hardware &&
              <>
                <div className="hardware-card__name">
                  <a href="#" className='hardware-card__name-text'>Сокет - {hardware.socket}</a>
                </div>
                <div className="hardware-card__name">
                  <a href="#" className='hardware-card__name-text'>Тип памяти - {hardware.memoryType}</a>
                </div>
                <div className="hardware-card__name">
                  <a href="#" className='hardware-card__name-text'>Максимальная память - {hardware.maxMemory}</a>
                </div>
              </>
          }

        </div>
      </article>
    </Link>
  );
}
