import React from "react";

import ContactProriderIcons from './ContactProriderIcons'


class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="general-info">
          <div className='avatar-mainInfo'>
            <img  src={"../../../assets/avatar.jpg"} />

            <div className="name-position">
              <div>
              <p className='prorider-name'>
                Матвей Карпенко
              </p>
              <p className='prorider-specialization'>KiteSurfing/Windsurfing</p>
              </div>
              <div className='extraInfo'>
                <div>
                <p className='infoName'>School in:</p>
                 <p><i className='map marker alternate icon'></i>Warsaw</p>
                </div>
                <div>
                  <p className='infoName'>Contact me:</p>
                  <ContactProriderIcons />
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="likesAndPosts-info">
            <p><span>Wisdom:</span> 2 y.</p>
            <hr/>
            <p><span>Posts:</span> 10</p>
            <hr/>
            <p><span>Likes:</span> 40</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
