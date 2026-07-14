import React from 'react'

const Projects = () => {
    const proj1 = "VM"
    const proj2 = "Asher Dam"
    return (
    <ul onClick={handleClick}>
        <li className='epic'>This Site</li>
        <li>{proj1}</li>
        <li>{proj2.toUpperCase()}</li>
        <li>{temp}</li>
    </ul>
    )
}

export default Projects

function handleClick (e) {
    console.log(e);
    this.className('epic').innerHTML('UPDATED SITE');
}

const temp = 'text';