import React from 'react';

import Header from './Header';
import AddPost from './AddPost';

class WholePersonalPage extends React.Component {
    render() {
        return (
            <main className='personalPage-holder'>
                <section> <Header /> </section>
                <section> <AddPost /> </section>      
            </main>
        )
    }
}

export default WholePersonalPage