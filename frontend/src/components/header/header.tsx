import { Link } from 'react-router-dom';
import myImage from '../../resourses/logo.png';
import './header.css';
import { AppRoutes } from '../../constants';

export function Header(){
  return(
    <header className={'header'}>
      <a className={'header_logo'} href="/app" title={'На главную'}>
        <img width="75" height="75" src={myImage} alt="Main Logo"></img>
      </a>
      <nav className={'navigation'}>
        <ul className={'navigation_list'}>
          <li><Link to={AppRoutes.Main} className={'navigation_button'}> На главную </Link></li>
          <li><Link to={AppRoutes.UpgradePage} className={'navigation_button'}>Улучшить ПК</Link></li>
          <li><Link to={AppRoutes.CreatePage} className={'navigation_button'}>Конфигурация нового ПК</Link></li>
          {/* <li><Link to={AppRoutes.ScanPage} className={'navigation_button'}>Сохранить сборку</Link></li> */}
          {/* <li><Link to={AppRoutes.CreatePage} className={'navigation_button'}>Что это</Link></li> */}
          <li><Link to={AppRoutes.MyAssembliesPage} className={'navigation_button'}>Мои сборки</Link></li>
          <li><Link to={AppRoutes.HardwaresPage} className={'navigation_button'}>Каталог железа</Link></li>
          <li><Link to={AppRoutes.ScanPage} className={'navigation_button'}>Сканировать ПК</Link></li>
        </ul>
      </nav>
    </header>
  );
}
