import React from 'react'
import headshot from '../assets/headshot.png'

const Card = () => {
  return (
     <>
    <div className="card">
        <img className="card-image" src={headshot} alt="Rocco's Photo"/>
        <p className="card-text">Hello</p>

    </div>

    <style>
    </style>

    </>
)
}

export default Card