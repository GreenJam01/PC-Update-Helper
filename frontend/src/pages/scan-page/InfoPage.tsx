import {LinkButton} from '../../components/link-button/link-button';
import {Button} from '../../components/button/button';
import './scan-page.css';
import { AppRoutes, BASE_URL } from '../../constants';
import Header from '../../components/header/header';

export function InfoPage() {
  const handleDownload = async () => {
    try {
      const response = await fetch(`${BASE_URL}download/exe`); // Замените на URL вашего API

      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Scanner.exe'); // Имя файла при скачивании
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Ошибка при скачивании:', error);
    }
  };
  return (
    <>
      <Header/>
      <div className={'a12 xs12 s12 center'}><h1>Просканировать ПК</h1></div>
      <div className={'center'}>
                Скачайте программу по кнопке ниже, запустите скрипт, после этого нажмите на кнопку "Далее".
      </div>
      <div className={'isolated center'}>

        <Button onClick={handleDownload}>Скачать</Button>

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
