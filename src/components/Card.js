import React from 'react'
import image1 from '../images/image 12.png'
import starImage from '../images/Group 65.png'

export default function Card(){
    return(
        <div className="card">
            <img src= {image1} alt="Zaferes" className="card---img"/>
            <div className="card---stats">
                <img src={starImage}/>
            </div>
        </div>
    )
}