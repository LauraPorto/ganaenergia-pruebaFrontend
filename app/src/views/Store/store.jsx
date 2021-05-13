import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Article from '../../components/Article/article';
import axios from 'axios';

const Store = () => {

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
            <div className="store-article-form">
                <Article/>
            </div>
            <div className="store-articles">
                <button onClick={() => getArticles()}></button>
                <div className="map-articles">
                    {
                        allArticles.map(article => 
                            <div className="map-allarticles">
                                <div className="map-name">
                                    {article.name}
                                </div>
                                <div className="map-price">
                                    {article.price}
                                </div>
                                <button onClick={() => deleteArticle({article})}>DELETE ARTICLE</button>
                            </div>
                            
                            )
                    }
                </div>

            </div>
        </div>
    )
}

export default Store;
