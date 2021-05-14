import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Article = () => {

    //Hooks
    const [dataArticle, setDataArticle] = useState({
        name: '',
        price: ''
    });

    const handleState = (event) => {
        let data = { ...dataArticle, [event.target.name]: event.target.value };
        setDataArticle(data);
    };

    const createArticle = async () => {
        console.log('estamos dentro de la función checkdata');

        try{
            const result = await axios.post('http://localhost:3002/article/', dataArticle);
            console.log(result, 'resultado de login');
            alert('Article created successfully');
        }catch{
            console.log('Something is wrong with your article. Review please !')
        };
        
    };

    const updateArticle = async () => {
        console.log('estamos dentro de la función updatedata');

        try{
            const result = await axios.put('http://localhost:3002/article/', dataArticle);
            console.log(result, 'resultado de login');
            alert('Article updated successfully');
        }catch{
            console.log('Something is wrong with your article. Review please !')
        };
        
    };

    return (
        <div className="article-main-container">
            <form>
                <div class="form-group">
                    <label for="email">Name</label>
                    <input type="username" name="username" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                </div>
                <div class="form-group">
                    <label for="email">Price</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                </div>
            </form>
            <div>
                <button type='submit' onClick={() => createArticle()} className='button-create'>CREATE ARTICLE</button>
                <button type='submit' onClick={() => updateArticle()} className='button-create'>UPDATE USER</button>
            </div>
        </div>
    )
}

export default Article;
