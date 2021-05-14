import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Register from '../../components/Register/register';
import axios from 'axios';

const Profile = () => {

    const history = useHistory();

    const [allUsers, setAllUsers] = useState([]);

    const getUsers = async () => {
        const result = await axios.get('http://localhost:3002/user/');
        console.log(result, 'todos los usuarios');
        setAllUsers(result.data);
        console.log(allUsers, 'allusers after set');
    };

    const deleteUser = async ({user}) => {
        const id = user._id;
        const result = await axios.delete(`http://localhost:3002/user/${id}`);
        console.log(result, 'esto es el resultado del borrado de usuario');
        alert('User deleted successfully');
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
                            <div className="map-allusers">
                                <div className="map-username">
                                    Username : {user.username}
                                </div>
                                <div className="map-email">
                                    Email : {user.email}
                                </div>
                                <div className="map-id">
                                    Id : {user._id}
                                </div>
                                <button className="delete-btn" onClick={() => deleteUser({user})}>DELETE USER</button>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>

    )
}

export default Profile;
