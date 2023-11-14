import axios from 'axios';
import React, { useState} from 'react';
import ImageComponent from './Logo.png';
import { Link } from 'react-router-dom';

function Signup() {
    const [libroActual, setLibroActual] = useState({ Email:'', Contrasena:'', Cedula:'' });
    const API_URL = 'http://localhost:3000/api/Usuarios';
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLibroActual({ ...libroActual, [name]: value });
    };

    async function validar() {

        // Obtener el valor del campo de entrada
        var valorCampo = document.getElementById('campoEntrada').value;
        var contra = document.getElementById('contra');
        var contra2 = document.getElementById('contra2');
        try {
            // Verificar si el campo está vacío
            

            if (valorCampo === '' || contra==='' || contra2==='') {
                alert('Por favor, ingresa texto antes de enviar.');
            }else if (contra === contra2) {
                await axios.post(API_URL, libroActual);
                setLibroActual({ Email:'', Contrasena:'', Cedula:'' });
                alert('Añadido al sistema.');
            } else {
                
                alert('Error al ingresar los datos, puede las contraseñas no coincidan.');
            }
        } catch (err) {
            alert('Datos ingresados no son correctos');
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
            <div className='mb-2 rounded-corner bg-green'>
            <h3 className='pb-3 pt-3 bold-text' >Registrarse</h3>
            </div >
                <form>
                    <div className='mb-2 signup-element bg-green'>
                        <h4 className='centered-bold-text' htmlfor="email">Email</h4>
                        <input type="email" id="campoEntrada" placeholder='Ingrese Email' className='input-design' name="Email" value={libroActual.Email} onChange={handleInputChange} required/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="password">Contraseña</h4>
                        <input type="password" id="contra" placeholder='Ingrese contraseña' className='input-design' name="Contrasena" value={libroActual.Contrasena} onChange={handleInputChange} required/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="password">Repetir contraseña</h4>
                        <input type="password" id="contra2" placeholder='Repetir contraseña' className='input-design'  onChange={handleInputChange} required/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="Identificacion">Identificacion</h4>
                        <input type="Identificacion" id="campoEntrada" placeholder='Identificacion' className='input-design' name="Cedula" value={libroActual.Cedula} onChange={handleInputChange} required/>
                    </div>
                    <div className=' signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="face">Subir datos biometricos</h4>
                    <button className='boton-scan'> Seleccionar archivo</button>
                    </div>
                    <div className=' d-grid'>
                        <button className='boton-log' type='submit' onClick={validar} > Aceptar</button>
                    </div>
                    
                    
                    <Link className='chage-login-singin' to ='/'>Login</Link>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup