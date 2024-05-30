import {LinkButton} from '../../components/link-button/link-button';
import {Container} from '../../components/container/container';
import { AppRoutes } from '../../constants';
import Header from '../../components/header/header';

export function UpgradePage(){
  return(
    <>
      <Header/>
      <Container>
        <div className={'a12 xs12 s12 center'}><h1>Обновить ПК</h1></div>
        <div className={'a6 xs12 s12 center'}>
          <h1>Сканировать ПК</h1>
          <LinkButton href={AppRoutes.InfoPage}>СКАНИРОВАТЬ!!!</LinkButton>
        </div>
        <div className={'a6 xs12 s12 center'}>
          <h1>Собрать новый</h1>
          <LinkButton href={AppRoutes.CreatePage}>СОБРАТЬ!!!</LinkButton>
        </div>
      </Container>
    </>
  );
}
