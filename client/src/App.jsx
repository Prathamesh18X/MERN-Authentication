import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header.jsx'
import Homescreen from './screens/Homescreen.jsx'
import Loginscreen from './screens/Loginscreen.jsx';
import Registrationscreen from './screens/Registrationscreen.jsx';

const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Homescreen/>} />
          <Route path='/login' element={<Loginscreen/>} />
          <Route path='/register' element={<Registrationscreen/>} />
        </Routes>
    </Router>

  );
}

export default App