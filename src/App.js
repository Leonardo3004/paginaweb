import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Empleado from './Empleado'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}></Route>
        <Route path='/signup' element= {<Signup/>}></Route>
        <Route path='/empleado' element= {<Empleado/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
