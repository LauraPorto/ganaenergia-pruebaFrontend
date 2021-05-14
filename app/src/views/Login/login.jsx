import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    
    //Hooks
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: '',
        toke: ''
    });

    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };
        setDataLogin(data);
    };

    const checkData = async () => {

        try{
            const result = await axios.post('http://localhost:3002/user/login', dataLogin);
            if(result.data){
                history.push('/home')           
            }

        }catch{
            alert('Email or user incorrect !');
        };
        
    };

    return (
        <div className='login-main-container'>
            <div className="title-login">
                <p>Welcome to your page !</p>
            </div>
            <div className="form-container">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={handleState}/>
                    </div>    
                    <button type='button' onClick={() => checkData()} className='button-login'>LOGIN</button>
                </form>
            </div>

        </div>
    )
}

export default Login;
