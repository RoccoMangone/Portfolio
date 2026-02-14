import React from 'react'

const Projects = () => {
    const proj1 = "VM"
    const proj2 = "Asher Dam"
    return (
    <ul>
        <li>This Site</li>
        <li>{proj1}</li>
        <li>{proj2.toUpperCase()}</li>
    </ul>
    )
}

export default Projects