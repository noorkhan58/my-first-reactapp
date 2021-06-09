import React from 'react'
import Post from './Post'

const Posts = ({postList}) => {

    return (
        <div>
            {postList.map(post => <Post post={post} />)}
        </div>
    )
}

export default Posts
