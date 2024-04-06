import {LinkButton} from '../../components/link-button/link-button';
import {Container} from '../../components/container/container';
import { AppRoutes } from '../../constants';

export function UpgradePage(){
  return(
    <>
      <Container>
        <div className={'a12 xs12 s12 center'}><h1>PC Update Helper</h1></div>
        <div className={'a6 xs12 s12 center'}>
          <h1>Сканировать ПК</h1>
          <LinkButton href={AppRoutes.InfoPage}>СКАНИРОВАТЬ!!!</LinkButton>
        </div>
        <div className={'a6 xs12 s12 center'}>
          <h1>Собрать новый</h1>
          <LinkButton href={AppRoutes.CreatePage}>СОБРАТЬ!!!</LinkButton>
        </div>
      </Container>
      <div className={'isolated center'}>
        <LinkButton href={AppRoutes.Main}>На главную</LinkButton>
      </div>
    </>
  );
}
