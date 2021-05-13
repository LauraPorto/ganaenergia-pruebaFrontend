import React, {useState} from 'react';
import Register from '../../components/Register/register';
import axios from 'axios';

const Profile = () => {

    const [allUsers, setAllUsers] = useState([]);

    const getUsers = async () => {
        const result = await axios.get('http://localhost:3002/user/');
        console.log(result, 'todos los usuarios');
        setAllUsers(result.data);
        console.log(allUsers.users, 'seteo usuarios');

    };

    return (
        <div className="profile-main-container">
            <div className="profile-register">
                <Register/>
            </div>
            <div className="profile-users">
                <button onClick={() => getUsers()}>ALL USERS</button>
                <div className="map-users">
                    {
                        allUsers.map(user => 
                            <div className="map-allusers">
                                <div className="map-username">
                                    {user.username}
                                </div>
                                <div className="map-email">
                                    {user.email}
                                </div>
                                <div className="map-id">
                                    {user.id}
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
