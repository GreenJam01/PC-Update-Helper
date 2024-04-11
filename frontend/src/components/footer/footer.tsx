import { Link } from 'react-router-dom';
import myImage from '../../resourses/logo_white.png';
import './footer.css';
import { AppRoutes } from '../../constants';

export function Footer(){
  return(
    <footer className="footer">
      <div className="footer_black"></div>
      <div className="footer_wrapper">
        <Link className={'footer_logo'} to = {AppRoutes.Main} title={'На главную'}>
          <img width="75" height="75" src={myImage} alt="Main Logo"></img>
        </Link>
        <div className="footer_container">
          <div className="footer_title">PC UP</div>
          <div className="footer_email">Почта для связи</div>
          <div className="footer_email2">qweqwe@gmail.com</div>
          <div className="footer_pcUp">pcup.com © 2024</div>
        </div>
      </div>
    </footer>
  );
}
