import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Register from '../../components/Register/register';
import axios from 'axios';

const Profile = () => {

    const history = useHistory();

    const [allUsers, setAllUsers] = useState([]);

    const getUsers = async () => {
        const result = await axios.get('http://localhost:3002/user/');
        setAllUsers(result.data);
    };

    const deleteUser = async ({user}) => {
        const id = user._id;
        await axios.delete(`http://localhost:3002/user/${id}`);
        alert('User deleted successfully');
        getUsers();
    };

    const updateUser = async (id) => {

        try{
            await axios.put(`http://localhost:3002/user/${id}`);
            alert('User registered successfully');
        }catch{
            alert('Email or user incorrect !')
        };
        getUsers();
    };

    return (
        <div className="profile-main-container">
             <div className="back" onClick={() => history.push('/home')}>
                BACK
            </div>
            <div className="profile-register">
                <Register/>
            </div>
            <div className="profile-users">
                <button className="btn-all" onClick={() => getUsers()}>ALL USERS</button>
                <div className="map-users">
                    {
                        allUsers.map(user => 
                            <div className="map-allusers" key={user._id}>
                                <div className="map-username">
                                    Username : 
                                    <input className ="input-profile" name='username' placeholder={user.username}></input>
                                </div>
                                <div className="map-email">
                                    Email : 
                                    <input name='username' className ="input-profile" placeholder={user.email}></input>
                                </div>
                                <div className="map-id">
                                    Id : 
                                    <input name='username' className ="input-profile" placeholder={user._id}></input>
                                </div>
                                <div className="btns">
                                    <button className="delete-btn" onClick={() => deleteUser({user})}>DELETE USER</button>
                                    <button type='submit' onClick={() => updateUser(user._id)} className='update-btn'>UPDATE USER</button>
                                </div>
                                
                            </div>
                            )
                    }
                </div>
            </div>
        </div>

    )
}

export default Profile;
