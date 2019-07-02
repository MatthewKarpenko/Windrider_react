import React from 'react';

import WindriderImg from '../../images/head3.png'

class Post extends React.Component {
    render() {
        return (
            <section className="sectionWithPost">

                <div className="ui card postHolder">
                    <div className="content author-time">
                        <div className="right floated meta">14ч.</div>
                        <div className="username-image">
                        <img className="ui avatar image" src={WindriderImg} /> <p>Матвей Карпенко</p>
                        </div>
                    </div>

                <div className="image">
                    <img src={WindriderImg} />
                </div>

                <div className="content comments-likes-container">
                    <span className="right floated">
                    <i className="heart outline like icon"></i>
                        17 лайков</span>
                    <i className="comment icon"></i>3 комментария
                </div>

                <div className="extra content">
                    <div className="ui large transparent left icon input">
                            <i className="comment outline icon"></i>
                    <input type="text" placeholder="Оставить комментарий..."/>
                     
                    </div>
                        <button class="ui secondary button comment-button">
                            Отправить
                        </button>  
                </div>

                </div>

            </section>
        )
    }
}

export default Post