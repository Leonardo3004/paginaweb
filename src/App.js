import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Empleado from './Empleado'
import AgregarCliente from './AgregarCliente';
import Ingreso from './Ingreso';
import Venta from './Venta';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}></Route>
        <Route path='/signup' element= {<Signup/>}></Route>
        <Route path='/empleado' element= {<Empleado/>}></Route>
        <Route path='/agregarcliente' element= {<AgregarCliente/>}></Route>
        <Route path='/ingreso' element= {<Ingreso/>}></Route>
        <Route path='/venta' element= {<Venta/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
