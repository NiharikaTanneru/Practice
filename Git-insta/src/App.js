import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
           {/*  <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} /> */}
             <Route path="/signup" element={<SignUp/>} />
            
            {/* <Route path="*" element={<ErrorPage />}/> */}
          </Routes>
        </div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
