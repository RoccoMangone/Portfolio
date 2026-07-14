import React from 'react'
import Card from '../components/card'

export default function Home() {
  return (
    <div>
      <Card/>
      <div>
        <button onClick={()=>{console.log('hi')}}>
          Click Me
        </button>
      </div>
    </div>
  )
}
