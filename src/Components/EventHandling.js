import React, {useState} from 'react'

const EventHandling = (props) => {

    const[name, setName] = useState('Sifat')

    if(name==='sifat') {
    return ( 
        <div>
            <button onClick={()=> props.alertme(name)}>Click Me</button>

        </div>
    )
    }else{
        return (<h1>Nothing to render</h1>)
    }
    
}

export default EventHandling
