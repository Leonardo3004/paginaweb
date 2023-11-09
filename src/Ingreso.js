import React from 'react'
import ImageComponent from './Logo.png';

function Ingreso() {
    return (
        <div>
            <header>
                <div class=' d-flex align-items-center'>
                    <img src={ImageComponent }width={100} alt="logo del proyecto" />
                    
                    <h2 class='p-4 header-text'>LabSuelos</h2>
                    <nav>
                    <div class=' d-flex '>
                    <a href='/' class='nav-path'>Inicio</a>
                    <a1 href='/' class='nav-mark'>{'>'}</a1>
                    <a href='/empleado' class='nav-path'>Empleado</a>
                    <a1 href='/' class='nav-mark'>{'>'}</a1>
                    <a href='/empleado' class='nav-path'>Ingreso</a>
                    </div>
                    </nav>
                </div>
            </header>
            <div class='d-flex align-items-center'>
                <div className='p-3 template d-flex  100-w vh-100 bg-white'>
                
                    <div className=' empleado-panel rounded-corner bg-gray'>
                        <div className='mb-2 rounded-corner bg-green'>
                            <h3 className='pb-3 pt-3 bold-text' >Empleado</h3>
                        </div >
                        <form>
                            <div className='d-grid'>
                                <button className='boton-panel' href ='/empleado'> Historial</button>
                            </div>
                            <div className='d-grid'>
                                <button className='boton-panel' href ='/empleado'> Registrar clientes</button>
                            </div>
                            <div className='d-grid'>
                                <button className='boton-panel' href ='/empleado'> Creditos</button>
                            </div>
                        </form>
                    </div>
                

                    <div className='p-3 template d-flex flex-column 100-w vh-100'>
                        <div className='d-flex'>
                            
                        </div>

                        
                        
                        
                        <div className=' registro-ingreso rounded-corner bg-gray'>
                        <div className=' rounded-corner bg-green'>
                        <h3 className='pb-3 pt-3 bold-text' >Registro ingreso de muestras</h3>
                        </div >
                            <form>
                            <div className='d-flex'>
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Nombre:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente'/>
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Entregado:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente'/>
                            
                            </div>
                            <div className='d-flex'>
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Cedula:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente'/>
                            
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Cultivo:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente'/>
                            </div>
                            </form>
                            <div className=' rounded-corner bg-green'>
                            <h3 className='pb-3 pt-3 bold-text' >Código de laboratorio | Identificación de Campo | Análisis </h3>
                            </div >

                        </div>
                        <div>
                            <div className='align-items-center d-flex'>
                                <h3 className=' factura-text' >Costo:</h3>
                                <input type="texto" placeholder='' className='dato-factura'/>
                                <h3 className='factura-text' >2% IVA:</h3>
                                <input type="texto" placeholder='' className='dato-factura'/>
                                <h3 className=' factura-text' >Total a pagar:</h3>
                                <input type="texto" placeholder='' className='dato-factura'/>
                            </div>

                            <div className='align-items-center d-flex'>
                                <h3 className='factura-text' >Fecha de entrega:</h3>
                                <input type="texto" placeholder='' className='dato-factura'/>
                                <h3 className='factura-text' >De factura a credito:</h3>
                                <input type="texto" placeholder='' className='dato-factura'/>
                                <button className='boton-aceptar' href ='/empleado'> Aceptar</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ingreso