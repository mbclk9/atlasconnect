import React from 'react'

export default function UserItem({user,onDelete}){

    return(
        <div>
            <h3>{user.name}</h3>
            <p> E-Posta: {user.email} </p>
            <p>Yaş: {user.age} </p>
            <button onClick={() => onDelete(user._id)}>Sil</button>
        </div>
    )
}