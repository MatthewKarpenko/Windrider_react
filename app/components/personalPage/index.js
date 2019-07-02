import React from 'react';

import Header from './Header';
import Post from './Post';

class WholePersonalPage extends React.Component {
    render() {
        return (
            <main>
                <sectio> <Header /> </sectio>
                
                <section> <Post/> </section>
            </main>
        )
    }
}

export default WholePersonalPage