import React from 'react'
import User from './User'

const Users = ({usersList}) => {

    // const allUsers = props.usersList.map(user => <User user={user}/>)
    return (
        <div>
            {usersList.map(user => <User user={user}/>)}
        </div>
    )
}

export default Users
