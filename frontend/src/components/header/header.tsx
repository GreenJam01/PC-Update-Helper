import { Link, NavLink } from 'react-router-dom';
import myImage from '../../resourses/logo.png';
import './header.css';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks/use-app';
import { authSelectors } from '../../slices/authSlice';

export function Header(){
  const authorizationStatus = useAppSelector(authSelectors.getAuthorizationStatus);
  return(
    <header className={'header'}>
      <NavLink className={'header_logo'} to={AppRoutes.Main} title={'На главную'}>
        <img width="75" height="75" src={myImage} alt="Main Logo"></img>
      </NavLink>
      <nav className={'navigation'}>
        <ul className={'navigation_list'}>
          <li><Link to={AppRoutes.Main} className={'navigation_button'}> На главную </Link></li>
          <li><Link to={AppRoutes.UpgradePage} className={'navigation_button'}>Улучшить ПК</Link></li>
          <li><Link to={AppRoutes.CreatePage} className={'navigation_button'}>Конфигурация нового ПК</Link></li>
          {/* <li><Link to={AppRoutes.ScanPage} className={'navigation_button'}>Сохранить сборку</Link></li> */}
          {/* <li><Link to={AppRoutes.CreatePage} className={'navigation_button'}>Что это</Link></li> */}
          {authorizationStatus === AuthorizationStatus.Auth && <li><Link to={AppRoutes.MyAssembliesPage} className={'navigation_button'}>Мои сборки</Link></li>}
          <li><Link to={AppRoutes.HardwaresPage} className={'navigation_button'}>Каталог железа</Link></li>
          <li><Link to={AppRoutes.ScanPage} className={'navigation_button'}>Сканировать ПК</Link></li>
        </ul>
      </nav>
    </header>
  );
}
