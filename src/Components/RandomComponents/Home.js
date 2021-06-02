import React from 'react'
import PropTypes from 'prop-types'
import noor from '/Users/noorkhan/JavaScriptCode/React-Tutorial/my-first-reactapp/src/Resources/Photos/noor.jpg';

const Home = (props) => {
    return (
        <div>
            <p>This home component {props.name} {props.video} {props.view} {props.time}</p>
            <img src={noor} alt="Noor pictures" width='200px' height='300px'></img>
            
        </div>
    )
}

Home.defaultProps = {
    name:"Java",
    view: "4000",
}

Home.propsTypes = {
    name: PropTypes.string.isRequired,
}

export default Home
