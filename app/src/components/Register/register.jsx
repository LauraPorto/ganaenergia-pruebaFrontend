import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {


    //Hooks
    const [dataUser, setDataUser] = useState({
        username: '',
        id: '',
        email: '',
        password: '',
    });

    const handleState = (event) => {
        let data = { ...dataUser, [event.target.name]: event.target.value };
        setDataUser(data);
    };

    const checkData = async () => {

        try{
            await axios.post('http://localhost:3002/user/', dataUser);
            alert('User registered successfully');
        }catch{
            alert('Email or user incorrect !')
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
            </div>
        </div>

    )
}

export default Register;
