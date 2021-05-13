import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    
    //Hooks
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: ''
    });

    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };
        setDataLogin(data);
    };

    const checkData = async () => {
        const result = await axios.post('http://localhost:3002/user/login');
        console.log(result, 'resultado de login');
    };

    return (
        <div className='login-main-conainer'>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={() => handleState()}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={() => handleState()}/>
                </div>
                <button type='submit' onClick={() => checkData()} className='button-login'></button>
            </form>
        </div>
    )
}

export default Login;
