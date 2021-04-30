import React from 'react'
import { hot } from 'react-hot-loader'

const skell = "https://image.freepik.com/free-vector/dancing-skeletons-concept-illustration_114360-3200.jpg"

const HelloWorld = () => {
    return (
        <div>
            <h3>We are mern skeletons, and our dance is macabre</h3>
            <img src={skell} alt=""/>
        </div>
    )
}

export default hot(module)(HelloWorld)