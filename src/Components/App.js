import React, {useState, useEffect} from 'react'
import Destructure from './Destructure'
import EventHandling from './EventHandling'
import ParentComponent from './ParentComponent'
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


    const alertMe = (str) => {
        alert("Hello " + str)
    }

    return (
        <div>
            {/* <Users usersList={usersList}/> */}

            {/* <Posts postList={postList} /> */}

            {/* <ParentComponent /> */}

            {/* <Destructure name="Fardin Khan" age={20} /> */}

            <EventHandling  alertme = {alertMe}/>
        </div>
    )
}
