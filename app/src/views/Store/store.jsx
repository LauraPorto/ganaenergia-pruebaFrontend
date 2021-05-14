import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Article from '../../components/Article/article';
import axios from 'axios';

const Store = () => {

    const history = useHistory();

    const [allArticles, setAllArticles] = useState([]);

    const getArticles = async () => {
        const result = await axios.get('http://localhost:3002/article/');
        setAllArticles(result.data);
    };

    const deleteArticle = async ({article}) => {
        const id = article._id;
        await axios.delete(`http://localhost:3002/article/${id}`);
        alert('Article deleted successfully !');
        getArticles();
    };


    const updateArticle = async (id) => {

        try{
            await axios.put(`http://localhost:3002/article/${id}`);
            alert('Article updated successfully');
        }catch{
            alert('Something is wrong with your article. Review please !')
        };
        getArticles();
        
    };

    return (
        <div className="store-main-container">
            <div className="back" onClick={() => history.push('/home')}>
                BACK
            </div>
            <div className="store-article-form">
                <Article/>
            </div>
            <div className="store-articles">
                <button onClick={() => getArticles()}>GET ALL ARTICLES</button>
                <div className="map-articles">
                    {
                        allArticles.map(article => 
                            <div className="map-allarticles">
                                <div className="map-name">
                                    Name : 
                                    <input name='username' className ="input-article" placeholder={article.name}></input>
                                </div>
                                <div className="map-price">
                                    Price : 
                                    Id : 
                                    <input name='username' className ="input-article" placeholder={article.price}></input>
                                </div>
                                <div className="btns">
                                    <button className="delete-btn" onClick={() => deleteArticle({article})}>DELETE ARTICLE</button>
                                    <button type='button' onClick={() => updateArticle(article._id)} className='update-btn'>UPDATE USER</button>
                                </div>
                                
                            </div>
                            
                            )
                    }
                </div>

            </div>
        </div>
    )
}

export default Store;
