import React from 'react'
import '../App.css'

const User = ({user}) => {
    return (
        <div className="userbox">
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <h4>{user.phone}</h4>
        </div>
    )
}

export default User
