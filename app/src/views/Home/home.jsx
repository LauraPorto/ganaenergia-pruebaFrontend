import React from 'react';
import {useHistory} from 'react-router-dom';
import user from '../../assets/img/user.png';
import product from '../../assets/img/product.png';

const Home = () => {

    const history = useHistory();

    return (
        <div className='home-main-conainer'>
            <div className="home-icon-menu" onClick={() => history.push('/profile')}>
                <img src={user} style={{width: '12em', height: '12em', margin: '2em'}} alt='USER'></img>
                <p>USERS</p>
            </div>
            <div className="home-icon-menu" onClick={() => history.push('/store')}>
                <img src={product} style={{width: '12em', height: '12em', margin: '2em'}} alt='ARTICLE'></img>
                <p>PRODUCTS</p>
            </div>
        </div>
    )
};

export default Home;
