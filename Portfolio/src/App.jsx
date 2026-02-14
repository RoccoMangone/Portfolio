import { useState } from 'react'
// import './App.css'
import Test from './components/test.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card.jsx'
import Projects from './components/projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
      {/* <Button/> */}
      <Projects/>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer/>
    </>
  )
}

export default App
