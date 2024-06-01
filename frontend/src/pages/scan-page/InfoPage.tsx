import {LinkButton} from '../../components/link-button/link-button';
import {Button} from '../../components/button/button';
import './scan-page.css';
import { AppRoutes } from '../../constants';
import Header from '../../components/header/header';

export function InfoPage() {

  return (
    <>
      <Header/>
      <div className={'a12 xs12 s12 center'}><h1>Просканировать ПК</h1></div>
      <div className={'center'}>
                Скачайте программу по кнопке ниже, запустите скрипт, после этого нажмите на кнопку "Далее".
      </div>
      <div className={'isolated center'}>
        <a href="dist\assets\Scanner.exe">
          <Button>Скачать</Button>
        </a>
      </div>
      <div className={'isolated center'}>
        <LinkButton href={AppRoutes.ScanPage}>Далее</LinkButton>

      </div>
      <div className={'isolated center'}>
        <LinkButton href={AppRoutes.Main}>На главную</LinkButton>
      </div>
    </>
  );
}
