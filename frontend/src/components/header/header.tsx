import { Link, NavLink } from 'react-router-dom';
import myImage from '../../resourses/logo.png';
import './header.css';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks/use-app';
import { authSelectors } from '../../slices/authSlice';
import { AssembliesSelectors } from '../../slices/assembliesSlice';

export function Header(){
  const authorizationStatus = useAppSelector(authSelectors.getAuthorizationStatus);
  const assemblies = useAppSelector(AssembliesSelectors.assemblies);
  return(
    <header className={'header'}>
      <NavLink className={'header_logo'} to={AppRoutes.Main} title={'На главную'}>
        <img width="75" height="75" src={myImage} alt="Main Logo"></img>
      </NavLink>
      <nav className={'navigation'}>
        <ul className={'navigation_list'}>
          <li><NavLink to={AppRoutes.Main} className={'navigation_button'}> На главную </NavLink></li>
          <li><NavLink to={AppRoutes.AssemblePage} className={'navigation_button'}>Улучшить ПК</NavLink></li>
          <li><NavLink to={AppRoutes.CreatePage} className={'navigation_button'}>Конфигурация нового ПК</NavLink></li>
          {/* <li><Link to={AppRoutes.ScanPage} className={'navigation_button'}>Сохранить сборку</Link></li> */}
          {/* <li><Link to={AppRoutes.CreatePage} className={'navigation_button'}>Что это</Link></li> */}
          {authorizationStatus === AuthorizationStatus.Auth &&
          <li>
            <NavLink to={AppRoutes.MyAssembliesPage}
              className={'navigation_button'}
            >
            Мои сборки ({assemblies.length})
            </NavLink>
          </li>}
          <li><NavLink to={`${AppRoutes.HardwaresPage}/Cpu`} className={'navigation_button'}>Каталог железа</NavLink></li>
          <li><NavLink to={AppRoutes.InfoPage} className={'navigation_button'}>Сканировать ПК</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
