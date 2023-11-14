
import React, { useState} from 'react';

import axios from 'axios';
import ImageComponent from './Logo.png';
import { Link } from 'react-router-dom';


function Login() {
    const API_URL = 'http://localhost:3000/api/Usuarios';
    const [libroActual, setLibroActual] = useState({ Email:'', Contrasena:''});
    
    function redirigir(destino) {
        // Cambia 'url_destino' por la URL a la que deseas redirigir
        window.location.href = destino;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLibroActual({ ...libroActual, [name]: value });
    };

    async function validar() {
        
        
        // Obtener el valor del campo de entraday
        var valorCampo = document.getElementById('campoEntrada').value;
        // Verificar si el campo está vacío
        if (valorCampo === '') {
            alert('Por favor, ingresa texto antes de enviar.');
        } else {
            
            
            var contra = await axios.get(`${API_URL}/${libroActual.Email}`);

            if (contra.data === libroActual.Contrasena){
                redirigir('http://localhost:3001/Empleado');
            }else{
                alert('Algun dato ingresado no es correcto.');
            }
            // Puedes agregar aquí la lógica para enviar el formulario o realizar otras acciones.
        }
    }
    return (
        <div>
            <header>
                <div class=' d-flex align-items-center'>
                    <img src={ImageComponent }width={100} alt="logo del proyecto" />
                    
                    <h2 class='header-text nombre-empresa'>LabSuelos</h2>
                    <nav>
                    <a href='/' class='nav-path'>Inicio</a>
                    </nav>
                </div>
            </header>
        <div className=' login template d-flex justify-content-center align-items-center 100-w vh-100 bg-white'>
            
            <div className='login-div rounded-corner bg-gray'>
            <div className='mb-5 rounded-corner bg-green'>
            <h3 className='pb-3 pt-3 bold-text' >Inicio de sesion</h3>
            </div >
                
                
                    
                    <div className='mb-2 signup-element bg-green'>
                        <h4 className='centered-bold-text' htmlfor="email">Email</h4>
                        <input type="email" id="campoEntrada" placeholder='Ingrese Email' className='input-design' name="Email" value={libroActual.Email} onChange={handleInputChange} required/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="password">Contraseña</h4>
                        <input type="password" id="contra" placeholder='Ingrese contraseña' className='input-design' name="Contrasena" value={libroActual.Contrasena} onChange={handleInputChange} required/>
                    </div>

                    <div className='mb-3 rounded-corner2 bg-green'>
                    <h4 className='centered-bold-text' htmlfor="face">Inicio con cara</h4>
                    <button className='boton-scan' > Escanear</button>
                    </div>
                    
                    <div className=' margen d-grid'>
                        <button className='boton-log' href ='/empleado' onClick={validar}> Aceptar</button>
                    </div>
                    
                    <Link className='chage-login-singin' to ='/signup'>Registrarse</Link>
                 
                
            </div>
        </div>
    </div>
    )
}

export default Login