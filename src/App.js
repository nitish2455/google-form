
import './App.css';
import Homepage from './components/Homepage'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Submit from './components/submit';

function App() {
  return (
    <Router>
   
       
        <Routes>
        <Route path="/Submit" element={<Submit/>} />
        <Route path="/" element={<Homepage/>} />

        </Routes>
       

    
    </Router>
  );
}

export default App;
