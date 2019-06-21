import React from 'react'

import avatar from "../../images/avatar.jpg"
const bg = require('../../images/proriderImageBackground.png')

class Header extends React.Component {
    render() {
      return (
          <div className='header-container' style ={ { backgroundImage: "url("+bg+")" } }> 
          <div className="add-profile"><p><i className="pencil alternate icon"></i> Редактировать профиль</p></div>
            <div className='general-info'>
                <img className="avatarImage" src={avatar}/>
                <p className="prorider-header-name">Матвей Карпенко</p>
                <p className="prorider-header-position">Пожилой прорайдер Windrider</p>
            </div>    
            <div className="likesAndPosts-info">
              <div>
                <p>Постов</p>
                <p>10</p>
              </div>
              <div>
                <p>Лайков</p>
                <p>23</p>
              </div>
              <div>
                <p>Опыт</p>
                <p>2г.</p>
              </div>
              
            </div>
          </div>
      )  
    } 
}

export default Header