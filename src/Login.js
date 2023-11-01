import React from 'react'
import ImageComponent from './Logo.png';
import { Link } from 'react-router-dom';


function Login() {
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
                <form>
                    
                    

                     
                    <div className='mb-3 rounded-corner2 bg-green'>
                        <h4 className='centered-bold-text' htmlfor="email">Email</h4>
                        <input type="email" placeholder='Ingrese Email' className='input-design'/>
                    </div>
                    <div className='mb-3 rounded-corner2 bg-green'>
                    <h4 className='centered-bold-text' htmlfor="password">Contraseña</h4>
                        <input type="password" placeholder='Ingrese contraseña' className='input-design'/>
                    </div>
                    <div className='mb-3 rounded-corner2 bg-green'>
                    <h4 className='centered-bold-text' htmlfor="face">Inicio con cara</h4>
                    <button className='boton-scan'> Escanear</button>
                    </div>
                    
                    <div className=' margen d-grid'>
                        <button className='boton-log' href ='/empleado'> Aceptar</button>
                    </div>
                    
                    <Link className='chage-login-singin' to ='/signup'>Registrarse</Link>
                    
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login