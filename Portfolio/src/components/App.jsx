import { Routes, Route } from 'react-router-dom'
import Header from './header';
import America250 from '../america250/America250';
import "../america250/america250.css"

function App() {
  return (
      <Routes>
          <Route path='/' element={<Header />}/>
          <Route path='/america250' element={<America250 />}/>
      </Routes>
  );
}

export default App