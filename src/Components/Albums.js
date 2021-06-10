import React, { Component } from 'react'

export default class Albums extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message="Sifat Khan",
             age=22,
             id=2
        }
    }
    

    render() {
        return (
            <div>
                <h1>{this.message}</h1>
            </div>
        )
    }
}
