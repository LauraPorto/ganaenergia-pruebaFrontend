import React, {useState} from 'react';
import axios from 'axios';

const Article = () => {

    //Hooks
    const [dataArticle, setDataArticle] = useState({
        name: '',
        price: ''
    });
    console.log(dataArticle, 'dataartcile')
    const handleState = (event) => {
        let data = { ...dataArticle, [event.target.name]: event.target.value };
        setDataArticle(data);
    };

    const createArticle = async () => {

        try{
            await axios.post('http://localhost:3002/article/', dataArticle);
            alert('Article created successfully');
        }catch{
            alert('Something is wrong with your article. Review please !')
        };
        
    };


    return (
        <div className="article-main-container">
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="name" name="name" className="form-control" id="name" onChange={handleState}/>
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input type="price" name="price" className="form-control" id="price" onChange={handleState}/>
                </div>
            </form>
            <div>
                <button type='submit' onClick={() => createArticle()} className='button-create'>CREATE ARTICLE</button>
            </div>
        </div>
    )
}

export default Article;
