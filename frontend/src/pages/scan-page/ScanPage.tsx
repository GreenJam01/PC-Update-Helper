import {LinkButton} from '../../components/link-button/link-button';
import {Container} from '../../components/container/container';
import {Button} from '../../components/button/button';
import './scan-page.css';
import {useEffect, useState} from 'react';
import { AppRoutes } from '../../constants';
import Header from '../../components/header/header';

type Assembly = {
    id: number;
    cpu: string;
    gpu: string;
    ram: string;
    motherboard: string;
    hdd: string;
}

export function ScanPage() {
  const [assembly, setAssembly] = useState<Assembly>();

  useEffect(() => {
    async function fetchData(){
      const request = new Request('/getLastAssembly');
      const response = await fetch(request);
      const result : Assembly = await response.json();

      setAssembly(result);
    }

    if(assembly == undefined){
      fetchData();
    }
  });

  return (
    <>
      <Header/>
      <div className={'a12 xs12 s12 center'}><h1>Scan Page</h1></div>
      <Container className={'assemble_page__container'}>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1>Процессор:</h1>
          <input className={'scan-page__input__field'} value={assembly?.cpu}/>
          <h1>Видеокарта:</h1>
          <input className={'scan-page__input__field'} value={assembly?.gpu}/>
          <h1>HDD:</h1>
          <input className={'scan-page__input__field'} value={assembly?.hdd}/>
        </div>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1>Материнская плата:</h1>
          <input className={'scan-page__input__field'} value={assembly?.motherboard}/>
          <h1>Оперативная память:</h1>
          <input className={'scan-page__input__field'} value={assembly?.ram}/>
        </div>
      </Container>
      <div className={'isolated center'}>
        <Button>Собрать</Button>
      </div>
      <div className={'isolated center'}>
        <LinkButton href={AppRoutes.Main}>На главную</LinkButton>
      </div>
    </>
  );
}
