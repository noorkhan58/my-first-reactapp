import React, {useState} from 'react'

const Destructure = (props) => {

    const{name, age} = props;
    const [message, setMessage] = useState("Hello WOrld")

    return (
        <div>
            <h1>{name} {age} {message}</h1>

        </div>
    )
}

export default Destructure
