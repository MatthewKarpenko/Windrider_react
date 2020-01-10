import React from 'react';

import Header from './Header';
import AddPost from './AddPost';
import Post from './Post'

class WholePersonalPage extends React.Component {
    render() {
        return (
            <main className='personalPage-holder'>
                <section> <Header /> </section>
                <section> <AddPost /> </section>      
                <section>
                    <Post
                        likesQuantity = { 0 }
                        commentsQuantity = { 0 }
                        authorText = 'asdfasdfsdafasdfasdfsdafasdfasdfsdafasdfasdfsdafasdfasdfsdafasdfasdfsdafasdfasdfsdafasdfasdfsdaf'
                        img = { null }
                        timeWhenPosted = { 0 }
                        likedByProrider = { false }
                    />
                </section>
            </main>
        )
    }
}

export default WholePersonalPage