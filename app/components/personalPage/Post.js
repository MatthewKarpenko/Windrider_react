import React from 'react';

import WindriderImg from '../../images/head3.png'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCommentButton: false
        }
        this.showElem = this.showElem.bind(this);
        this.hideElem = this.hideElem.bind(this);
    }

    showElem () {
        this.setState({showCommentButton: true})
        console.log(this.state.showCommentButton)
    }

    hideElem () {
        this.setState({showCommentButton: false});
        console.log(this.state.showCommentButton)

    }

    render() {
        return (
            <section className="sectionWithPost">

                <div className="ui card postHolder">
                    <div className="content author-time">
                        <div className="right floated meta">14ч.</div>
                        <div className="username-image">
                        <img className="ui avatar image" src={WindriderImg} /><p>Матвей Карпенко</p>
                        </div>
                    </div>
                <div className="post-text">
                    Привет как дела меня зовут матвей я тут гуляю дома со своей собакой маней и меня вообще ничего не колышит
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
                    <input type="text" 
                    onFocus={this.showElem} 
                    onBlur={this.hideElem} 
                    placeholder="Оставить комментарий..."/>
                     
                    </div>        
                        <button className="ui secondary button comment-button" style={ this.state.showCommentButton ? { display:'block'} : {display : 'none'} }>
                            Отправить
                        </button>  
                </div>

                </div>

            </section>
        )
    }
}

export default Post