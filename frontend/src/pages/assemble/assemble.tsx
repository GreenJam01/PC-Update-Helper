import {Container} from '../../components/container/container';
import {LinkButton} from '../../components/link-button/link-button';
import {PriceInput} from '../../components/price-input/price-input';
import './assemble.css';
import {SelectList} from '../../components/select-list/select-list';
import {appointmentList} from '../../data/appointment-list';
import {Button} from '../../components/button/button';
import { AppRoutes } from '../../constants';
import Header from '../../components/header/header';

import './assemble.css'
export function AssemblePage(){
  return(
    <>
      <Header/>
      <div className={'a12 xs12 s12 center'}>
        <h1 className='assemble_page_text'>
          Улучшить ПК
        </h1>
      </div>
      <Container className={'assemble_page__container'}>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1 className='assemble_component_text'>Цена:</h1>
          <PriceInput className={'wide'} label={'От:'}/>
          <PriceInput className={'wide'} label={'До:'}/>
          <h1 className='assemble_component_text'>Процессор:</h1>
          <div className={'assemble_page__radio-button'}>
            <input name={'1'} id={'radio-AMD'} type={'radio'}/>
            <label htmlFor={'radio-AMD'} radioGroup={'1'}>AMD</label>
          </div>
          <div className={'assemble_page__radio-button'}>
            <input name={'1'} id={'radio-Intel'} type={'radio'}/>
            <label htmlFor={'radio-Intel'}>Intel</label>
          </div>
        </div>
        <div className={'assemble_page__section a6 xs12 s12'}>
          <h1 className='assemble_component_text'>Назначение</h1>
          <SelectList options={appointmentList}/>
        </div>
        <div>
          <div className={'isolated center'}>
            <Button>Собрать</Button>
          </div>
          <div className = {'isolated center'}>
            <LinkButton href={AppRoutes.Main}>На главную</LinkButton>
          </div>
        </div>
      </Container>
    </>
  );
}
