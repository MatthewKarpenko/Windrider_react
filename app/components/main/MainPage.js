import React from 'react';
// import homepic from '../../images/homepic2-3.jpg';

class MainPage extends React.Component {

  render() {

    return (
      <div>
        <div id="homepic">
          {/* <img src={homepic} className="z-depth-2" alt="homepic" width="95%" height="100%" /> */}
        </div>

        <div className="schoolText">
          <div className="text-element"><span className="letter">W<span className="colorOrange">i</span>n<span className="colorOrange">d</span>r<span className="colorOrange">i</span>d<span className="colorOrange">e</span>r </span>shcool - <span className="leader">лидирующяя школа кайтсёрфинга в Украине</span> </div>
        </div>

        <div className="text-element2"><p>Предлагаем полный сервис от начинающих уроков до продвинутого обучения,<br /> аренды оборудования, розничной торговли и регулярных клубов кайта.<br /> Мы посвятили себя кайтсерфингу, и мы приветствуем всех,<br /> кто будет частью нашего сообщества.</p></div>

        <div className="following">
          <div className="following-element"><a href="#">Folow us along Instagram
            <span id="inst">@windriderua</span></a>
          </div>
        </div>

        <div className="socbot center-align">
          <div className="socbot-element">
            <a href="#">
              <img src="icons/facebook_1.svg" className="link2" alt="facebook" />
            </a>
          </div>
          <div className="socbot-element">
            <a href="#">
              <img src="icons/instagram.svg" className="link2" alt="instagram" />
            </a>
          </div>
          <div className="socbot-element">
            <a href="#">
              <img src="icons/mail.svg" className="link2" alt="mail" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage