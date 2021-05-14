import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Article from '../../components/Article/article';
import axios from 'axios';

const Store = () => {

    const history = useHistory();

    const [allArticles, setAllArticles] = useState([]);

    const getArticles = async () => {
        const result = await axios.get('http://localhost:3002/article/');
        console.log(result, 'article resultados');
        setAllArticles(result.data);
        console.log(allArticles, 'allarticles after set');
    };

    const deleteArticle = async ({article}) => {
        const id = article._id;
        const result = await axios.delete(`http://localhost:3002/article/${id}`);
        console.log(result, 'result de delete');
        alert('Article deleted successfully !');
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
                                    Name : {article.name}
                                </div>
                                <div className="map-price">
                                    Price : {article.price}
                                </div>
                                <button className="delete-btn" onClick={() => deleteArticle({article})}>DELETE ARTICLE</button>
                            </div>
                            
                            )
                    }
                </div>

            </div>
        </div>
    )
}

export default Store;
