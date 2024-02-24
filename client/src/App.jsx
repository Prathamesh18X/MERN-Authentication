import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header.jsx'
import Homescreen from './screens/Homescreen.jsx'
import Loginscreen from './screens/Loginscreen.jsx';
import Registrationscreen from './screens/Registrationscreen.jsx';
import Profilescreen from './screens/Profilescreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Homescreen/>} />
          <Route path='/login' element={<Loginscreen/>} />
          <Route path='/register' element={<Registrationscreen/>} />
          {/* Private Route */}
          <Route path='' element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profilescreen/>}/>
          </Route>
        </Routes>
    </Router>

  );
}

export default App