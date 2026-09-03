import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import Teste from './pages/teste';
import Home from './pages/home/home';
import './App.css'

function App() {
  return (
    <div className="app-root">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
          
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
