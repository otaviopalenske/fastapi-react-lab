import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import Teste from './pages/teste';
import Home from './pages/home/home';
import Checkout from './pages/checkout/checkout';
import './App.css'

function App() {
  return (
    <div className="app-root">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
          
        <Route path="/teste" element={<Teste />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
