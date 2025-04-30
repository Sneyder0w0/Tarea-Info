import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home.js'
import { Card } from './Card/Card.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
