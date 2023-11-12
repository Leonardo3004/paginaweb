import React from 'react'
import ImageComponent from './Logo.png';
import { Link } from 'react-router-dom';

function Signup() {
    function redirigir(destino) {
        // Cambia 'url_destino' por la URL a la que deseas redirigir
        window.location.href = destino;
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
                        <input type="email" placeholder='Ingrese Email' className='input-design'/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="password">Contraseña</h4>
                        <input type="password" placeholder='Ingrese contraseña' className='input-design'/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="password">Repetir contraseña</h4>
                        <input type="password" placeholder='Repetir contraseña' className='input-design'/>
                    </div>
                    <div className='mb-2 signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="Identificacion">Identificacion</h4>
                        <input type="Identificacion" placeholder='Identificacion' className='input-design'/>
                    </div>
                    <div className=' signup-element bg-green'>
                    <h4 className='centered-bold-text' htmlfor="face">Subir datos biometricos</h4>
                    <button className='boton-scan'> Seleccionar archivo</button>
                    </div>
                    <div className=' d-grid'>
                        <button className='boton-log' onClick={() => redirigir('http://localhost:3001/Login')} > Aceptar</button>
                    </div>
                    
                    
                    <Link className='chage-login-singin' to ='/'>Login</Link>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup