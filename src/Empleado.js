import React, { useState, useEffect } from 'react';
import ImageComponent from './Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Empleado() {
    const [movimientos, setMovimineto] = useState([]);
    const [libros, setLibros] = useState([]);
    const [visualiza, setvisualiza] = useState([]);
    const API_URL = 'http://localhost:3000/api/TablaVenta';

    useEffect(() => {
        fetchLibros();
    }, []);
    
    const fetchLibros = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/FacturaIngreso');
          setLibros(response.data);
        } catch (error) {
          console.error('Error fetching libros:', error);
        }
    };

    const ver = async (id,venta) => {
        try {

            if (venta==='Venta'){
                const response = await axios.get(`${API_URL}/${id}`);
                setvisualiza(response.data);
            }else{
                const response = await axios.get(`${'http://localhost:3000/api/TablaIngreso'}/${id}`);
                setvisualiza(response.data);
            }
            

        } catch (error) {
          console.error('Error fetching libros:', error);
        }
    };

    function redirigir(destino) {
        // Cambia 'url_destino' por la URL a la que deseas redirigir
        window.location.href = destino;
    }
    
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
                    <a href='/empleado' class='nav-path'>Historial</a>
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
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/Empleado')} > Historial</button>
                            </div>
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/AgregarCliente')}> Registrar clientes</button>
                            </div>
                    </div>
                

                    <div className='p-3 template d-flex flex-column 100-w vh-100'>
                        <div className='d-flex'>
                            <div className=''>
                                <button className='boton-compraventa' onClick={() => redirigir('http://localhost:3001/venta')} > Vender</button>
                            </div>
                            
                            <div className=''>
                                <button className='boton-compraventa' onClick={() => redirigir('http://localhost:3001/ingreso')}> Ingresar</button>
                            </div>

                            <input type="search" placeholder='Busqueda' className='busqueda'/>

                            <div className=''>
                                <button className='boton-compraventa'> Buscar</button>
                            </div>
                        </div>

                        
                        
                        
                        <div className=' historial-muestras rounded-corner bg-gray'>
                        <div className='rounded-corner bg-green'>
                        <h3 className='pb-3 pt-3 bold-text' > Movimientos recientes</h3>

                        
                        </div >
                        <div className='table-container2'>
                            <table className="table">
                                <thead>
                                    <tr className="table-primary">
                                    <th>ID</th>
                                    <th>Fecha</th>
                                    <th>Entregado</th>
                                    <th>Total</th>
                                    <th>Cliente</th>
                                    <th>Venta o Ingreso</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {libros.map((libro, index) => (
                                    <tr key={libro.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                                        <td>{libro.id}</td>
                                        <td>{libro.fecha}</td>
                                        <td>{libro.entregado}</td>
                                        <td>{libro.total}</td>
                                        <td>{libro.cliente}</td>
                                        <td>{libro.ventaoingreso}</td>
                                        <td>
                                        <button onClick={() => ver(libro.id,libro.ventaoingreso)} className="btn btn-warning btn-sm me-2">ver</button>
                                        </td>
                                    </tr>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                        <div className='rounded-corner bg-green'>
                        <h3 className='pb-3 pt-3 bold-text' > Visualiza Factura</h3>

                        </div >

                        <div className='table-container2'>
                            <table className="table">
                                <thead>
                                    <tr className="table-primary">
                                    <th>Codigo</th>
                                    <th>Tipo de Muestra</th>
                                    <th>Detalle</th>
                                    <th>Cantidad</th>
                                    <th>Costo</th>
                                    <th>Identificacion de Campo</th>
                                    <th>Analisis Requerido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visualiza.map((elemento, index) => (
                                    <tr key={elemento.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                                        <td>{elemento.codigo}</td>
                                        <td>{elemento.tipodemuestra}</td>
                                        <td>{elemento.detalle}</td>
                                        <td>{elemento.cantidad}</td>
                                        <td>{elemento.costo}</td>
                                        <td>{elemento.identificaciondecampo}</td>
                                        <td>{elemento.analisisrequerido}</td>

                                        

                                        <td>
                                        </td>
                                    </tr>
                                    ))} 
                                </tbody>
                            </table>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Empleado