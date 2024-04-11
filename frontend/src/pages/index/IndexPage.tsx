import {Container} from '../../components/container/container';
import { Header } from '../../components/header/header';
import { HorizontalBar } from '../../components/horizBar/horizBar';
import pc from '../../resourses/pc.png';
import pcIcon from '../../resourses/pc_icon.png';
import pcIconUp from '../../resourses/pc_icon_up.png';
import pcIcomSave from '../../resourses/pc_icon_save.png';
import choiceImg from '../../resourses/choiceImg.png';
import { Footer } from '../../components/footer/footer';
import { LinkButton } from '../../components/link-button/link-button';
import { AppRoutes } from '../../constants';
// import { Promo } from "../../components/promo/promo";

export function IndexPage(){
  return(
    <div>
      <Header/>
      <Container>
        {/* <Promo>
                    <h1>some shit</h1>
                </Promo> */}
        <Container className="promo">
          <div className={'promo_info'}>
            <div className="promo_info_main">КАКОВО НАШЕ РЕМЕСЛО?</div>
            <div className="promo_info_add">
                        Nemo enim ipsam voluptatem, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus? Ut enim ad minima veniam, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo voluptas nulla pariatur.
            </div>
          </div>
          <div>
            <img className="promo_img" src={pc} alt="ОЧЕНЬ КРУТОЕ ИЗОБРАЖЕНИЕ ПК" />
            <div className="promo_imgText">Поможем собрать ПК или улучшить его, основываясь на вашем бюджете</div>
          </div>
        </Container>
        <Container className="aboutUs">
          <HorizontalBar></HorizontalBar>
          <h2 className="aboutUs_header">Что мы предлагаем</h2>
          <div className="aboutUs_divider"></div>
          <div className="aboutUs_wrapper">
            <div className="aboutUs_item">
              <div className="aboutUs_imgCircle">
                <img src={pcIcon} alt="1" className="aboutUs_img" />
              </div>

              <div className="aboutUs_descr">Помощь в сборке нового мощного ПК, основываясь на бюджете пользователя и его целях</div>
            </div>
            <div className="aboutUs_item">
              <div className="aboutUs_imgCircle">
                <img src={pcIconUp} alt="1" className="aboutUs_img" />
              </div>
              <div className="aboutUs_descr">Помощь в улучшении существующего ПК</div>
            </div>
            <div className="aboutUs_item">
              <div className="aboutUs_imgCircle">
                <img src={pcIcomSave} alt="1" className="aboutUs_img" />
              </div>
              <div className="aboutUs_descr">Возможность сохранения своих сборок</div>
            </div>
          </div>
        </Container>
        <Container className="choice">
          <HorizontalBar></HorizontalBar>
          <div className="black"></div>
          <div className="choice_container">
            <h2 className="choice_title">Выбор - отличная штука!</h2>
            <div className="choice_subtitle">Соберите компьютер, который подходит вам по целям и бюджету</div>
            <img src={choiceImg} alt="uber car" className="choice_img"/>
            <LinkButton children={'СОБРАТЬ ПК'} href={AppRoutes.AssemblePage} className="choice_button"></LinkButton>
            {/* <a className={"choice_assemble"} href="/app">Собери свой пк</a> */}
          </div>
        </Container>
        <Footer></Footer>
        {/* <Container>
                    <div className={"a12 center"}><h1>PC Update Helper</h1></div>
                    <div className={"a6 xs12 s12 center"}>
                        <h1>Собрать новый ПК</h1>
                        <LinkButton href={"/app/assemble"}>СОБРАТЬ!!!</LinkButton>
                    </div>
                    <div className={"a6 xs12 s12 center"}>
                        <h1>Улучшить старый ПК</h1>
                        <LinkButton href={"/app/upgrade"}>УЛУЧШИТЬ!!!</LinkButton>
                    </div>
                    <div className="skipX3"></div>
                    <div className={"a6 xs12 s12 center"}>
                        <h1>Мои сборки</h1>
                        <LinkButton href={"/app/myassemblies"}>Мои сборки!!!</LinkButton>
                    </div>
                </Container> */}

      </Container>
    </div>
  );
}
