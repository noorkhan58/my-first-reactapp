import React, {useState} from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const[message, setMessage] = useState("Parent")

    const greetParent = (childName) => {
        const mes = `Welcome ${message} from ${childName}`
        console.log(mes)
        alert(mes)
    }

    return (
        <div>
            <ChildComponent greetHandler={greetParent}/>
        </div>
    )
}

export default ParentComponent
