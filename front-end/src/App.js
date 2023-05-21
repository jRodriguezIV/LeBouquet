import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Error from './Pages/Error/Error';

const API = process.env.REACT_APP_API

function App() {
  return (
    <div>
      <Router>
        {window.location.pathname !== '/' && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
