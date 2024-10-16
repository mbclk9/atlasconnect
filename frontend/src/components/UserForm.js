import React, {useState} from 'react';
import { createUser } from '../services/api';

export default function UserForm(){
    const [user, setUser]= useState ({name:'', email:'', age:''})
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createUser(user);
            setUser({name:'', email:'', age:''});
            alert('Kullanıcı başarıyla eklendi');
        }catch (error){
            console.error('Kullanıcı ekleme hatası',error);
        }
    };

    return(
        <form onSubmit={handleSubmit} action="">
            <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='İsim' required />
            <input type="email" name='email' value={user.email} onChange={handleChange} placeholder='E-Posta' required />
            <input type="number" name='age' value={user.age} onChange={handleChange} placeholder='Yaş' required />
            
        </form>
    )
}