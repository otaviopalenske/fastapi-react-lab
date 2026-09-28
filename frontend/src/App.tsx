import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css'

function App() {
  return (
    <div className="app-root">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
