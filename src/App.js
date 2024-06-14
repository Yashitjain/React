import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { Fragment, useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  function check(mssg){
    console.log(mssg);
  }
  const[alert,setAlert] = useState(null);
  const [theme,setTheme] = useState("light");

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleTheme(selectedTheme){
    console.log(theme)
    if(selectedTheme==="light"){
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      document.title="Bloggy-light Mode"
      showAlert("white","success");
    }else if(selectedTheme==="dark"){
      document.body.style.backgroundColor="#3d3d3d"
      document.body.style.color="white"
      document.title="Bloggy-dark Mode"
      showAlert("black","success");
    }else if(selectedTheme==="green"){
      document.body.style.backgroundColor="#032f3c"
      document.body.style.color="white"
      document.title="Bloggy-green Mode"
      showAlert("green","success");

    }
    setTheme(selectedTheme)


  }

  

  return (
    
      <Router>
        <Navbar title="Bloggy" about="About Bloggy" theme={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert}/>
          <div className='cont'>
            <Routes>
              <Route exact path='/' element={<Form heading="Enter Your Text" theme={theme} showAlert={showAlert}/>} />

              <Route exact path='/about' element={<About />}>
                {/* <About></About> */}
              </Route>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
