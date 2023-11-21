import React, { useState, useEffect } from 'react';
import ImageComponent from './Logo.png';
import axios from 'axios';

function Ingreso() {
    const [facturaingreso, setfacturaIngreso] = useState({ fecha: (new Date).toDateString().slice(4), entregado:'', ClienteID:0, total:0}); 
    const [ingreso, setIngreso] = useState({ CodigoLaboratorio: '', IdentificacionDeCampo:'', AnalisisRequerido: ''});
    const [ingresos, setIngresos] = useState([]);
    const [totales, setTotaliva] = useState({totaliva:0, total:0});
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setDropdown] = useState([]);

    useEffect(() => {
        fetchDropdown();
  
    }, []);

    const fetchDropdown = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/clientes');
          setDropdown(response.data);
        } catch (error) {
          console.error('Error fetching libros:', error);
        }
    };

    

    const handleChangeDrop = (event) => {
        setSelectedOption(event.target.value);
        
    };
    const handleInputChangeEntregado = (e) => {
        const { name, value } = e.target;
        setfacturaIngreso({ ...facturaingreso, [name]: value });
    };

    const handleInputChangeingreso = (e) => {
        const { name, value } = e.target;
        setIngreso({ ...ingreso, [name]: value });
    };

    const addIngresos = async (prod) => {
        const newIngresos = [...ingresos, ingreso];
        setIngresos(newIngresos);

    };

    function redirigir(destino) {
        // Cambia 'url_destino' por la URL a la que deseas redirigir
        window.location.href = destino;
    }

    const actualizarTotales = (e) => {

        const { name, value } = e.target;
        setTotaliva({totaliva:(value*0.02).toFixed(2), total: (value*1.02).toFixed(2)});

    };

    const subirFacturaIngreso = async (e) => {

        try {


            facturaingreso.ClienteID=parseInt(selectedOption);
            facturaingreso.total=parseInt(totales.total);
            
            await axios.post('http://localhost:3000/api/FacturaIngreso', facturaingreso);

            
            for (var i = 0; i < ingresos.length; i++) {
                await axios.post('http://localhost:3000/api/Ingreso', ingresos[i]);
            }

            alert('factura reallizada con exito');
        } catch (error) {
            console.error('Error al analizar la venta:', error);
        }

    };

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
                        
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/Empleado')} > Historial</button>
                            </div>
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/AgregarCliente')}> Registrar clientes</button>
                            </div>
                            
                        
                    </div>
                

                    <div className='p-3 template d-flex flex-column 100-w vh-100'>
                        <div className='d-flex'>
                            
                        </div>

                        
                        
                        
                        <div className=' registro-ingreso rounded-corner bg-gray'>
                        <div className=' rounded-corner bg-green'>
                        <h3 className='pb-3 pt-3 bold-text' >Registro ingreso de muestras</h3>
                        </div >
                            
                            <div className='d-flex'>
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Cliente:</h3>
                            <div className='p-3 pt-3'>
                            <select value={selectedOption} onChange={handleChangeDrop}>
                                <option value="">Select an option</option>
                                {options.map((option) => (
                                <option key={option.nombre} value={option.id}>
                                    {option.nombre+'-'+option.cedula}
                                </option>
                                ))}
                            </select>
                            </div>

                            <h3 className='p-3 pt-4 agregar-cliente-text' >Entregado:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente' name='entregado' value={facturaingreso.entregado} onChange={handleInputChangeEntregado} required/>
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Cultivo:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente'/>

                            
                            
                            </div>
                            <div className='d-flex'>
                            
                            
                            

                            <h3 className='p-3 pt-4 agregar-cliente-text' >Codigo:</h3>
                            <input type="texto" placeholder='' className='venta-litcaja' name='CodigoLaboratorio' value={ingreso.CodigoLaboratorio} onChange={handleInputChangeingreso} required/>
                            
                            <h3 className='p-3 pt-4 agregar-cliente-text ' >Identificacion De Campo:</h3>
                            <input type="texto" placeholder='' className='input-agregar-cliente' name='IdentificacionDeCampo' value={ingreso.IdentificacionDeCampo} onChange={handleInputChangeingreso} required/>
                            
                            <h3 className='p-3 pt-4 agregar-cliente-text' >Analisis:</h3>
                            <input type="texto" placeholder='' className='venta-litcaja' name='AnalisisRequerido' value={ingreso.AnalisisRequerido} onChange={handleInputChangeingreso} required/>
                            
                            <button className='boton-aceptar' onClick={addIngresos}> Agregar </button>

                            </div>
                            
                            
                            

                            <table className="table" >
                                <thead>
                                    <tr className="table-primary">
                                    <th>Codigo</th>
                                    <th>Identificacion De Campo</th>
                                    <th>Analisis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ingresos.map((libro, index) => (
                                    <tr key={libro.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                                        <td>{libro.CodigoLaboratorio}</td>
                                        <td>{libro.IdentificacionDeCampo}</td>
                                        <td>{libro.AnalisisRequerido}</td>

                                        <td>
                                        </td>
                                    </tr>
                                    ))} 
                                </tbody>
                            </table>

                        </div>
                        <div>
                            <div className='align-items-center d-flex cajadeTotales'>
                                <h3 className='factura-text' >De factura a credito:</h3>
                                <input type="texto" placeholder='' className='venta-litcaja2'/>
                                <h3 className=' factura-text'  >Costo:</h3>
                                <input type="number" placeholder='' onChange={actualizarTotales} className='venta-litcaja2'/>
                                <h3 className='factura-text2' >2% IVA:{totales.totaliva}</h3>
                                <h3 className=' factura-text2' >Total a pagar:{totales.total}</h3>
                                <div className='caja-div-text'>
                                    <h3 className=' agregar-cliente-text' >Fecha: {(new Date).toDateString().slice(3)}</h3>
                                </div>

                            </div>

                            <div className='align-items-center d-flex'>
                                

                                
                                <button className='boton-aceptar' onClick={subirFacturaIngreso}> Aceptar</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ingreso