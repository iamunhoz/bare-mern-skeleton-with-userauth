import React from 'react'
import { hot } from 'react-hot-loader'
import dancemacabre from './assets/dancemacabre.jpg'

const HelloWorld = () => {
    return (
        <div>
            <h3>We are mern skeletons, and our dance is macabre</h3>
            <img src={dancemacabre} alt=""/>
        </div>
    )
}

export default hot(module)(HelloWorld)