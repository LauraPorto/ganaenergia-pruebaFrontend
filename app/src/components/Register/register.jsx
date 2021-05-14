import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {

    const history = useHistory();
    console.log(props, 'this is props');
    //Hooks
    const [dataUser, setDataUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleState = (event) => {
        let data = { ...dataUser, [event.target.name]: event.target.value };
        setDataUser(data);
    };

    const checkData = async () => {
        console.log('estamos dentro de la función checkdata');

        try{
            const result = await axios.post('http://localhost:3002/user/', dataUser);
            console.log(result, 'resultado de login');
            alert('User registered successfully');
        }catch{
            console.log('Email or user incorrect !')
        };
        
    };

    const updateData = async () => {
        console.log('estamos dentro de la función updatedata');

        try{
            const result = await axios.put('http://localhost:3002/user/', dataUser);
            console.log(result, 'resultado de login');
            alert('User registered successfully');
        }catch{
            console.log('Email or user incorrect !')
        };
        
    };

    return (

        <div className='register-main-conainer'>
            <form>
                <div class="form-group">
                    <label for="email">Username</label>
                    <input type="username" name="username" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={handleState}/>
                </div>        
            </form>
            <div>
                <button type='submit' onClick={() => checkData()} className='button-register'>REGISTER USER</button>
                <button type='submit' onClick={() => updateData()} className='button-register'>UPDATE USER</button>
            </div>
        </div>

    )
}

export default Register;
