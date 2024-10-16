import React, {useState ,useEffect  } from 'react';
import {getUsers, deleteUser} from '../services/api';
import UserItem from './UserItem';

export default function UserList(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    })

    const fetchUsers = async () => {
        try{
            const response = await getUsers();
            setUsers(response.data)
        }catch (error){
            console.error('Kullanıcıları getirme hatası ',error);
        }
    };

    const handleDelete = async (id) =>{
        try{
            await deleteUser(id);
            setUsers(users.filter(user => user._id !==id));
        }catch (error){
            console.log('Kullanıcıları silme hatası', error);
        }
    };


    return(
        <div>
            <h2>Kullanıcı Listesi</h2>
            {users.map(user => (
                <UserItem key={user._id} user={user} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}