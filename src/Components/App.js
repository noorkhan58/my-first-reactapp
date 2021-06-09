import React, {useState, useEffect} from 'react'
import Posts from './Posts'
import Users from './Users'

export const App = () => {

    const [usersList, setUsersList] = useState([])

    const [postList, setPostList] = useState([])

    const fetchUsers = async () => {
        const results = await fetch("http://localhost:5000/posts")
        const data = await results.json();
        return data;
    }

    useEffect(() =>{
        const addUsers = async () => {
            const allUsers = await fetchUsers();
            setUsersList(allUsers);
        }
        addUsers()
    }, [])

    useEffect(() =>{
        const addPost = async () => {
            const allPost = await fetchUsers();
            setPostList(allPost);
        }
        addPost()
    }, [])


    return (
        <div>
            {/* <Users usersList={usersList}/> */}

            <Posts postList={postList} />
        </div>
    )
}
