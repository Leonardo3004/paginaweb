import React, { useState, useEffect } from 'react';
import ImageComponent from './Logo.png';
import axios from 'axios';

function Venta() {
    const [selectedOption, setSelectedOption] = useState('');
    var selectedCedula = '';
    const [totaliva, setTotaliva] = useState({totaliva:0});
    const [options, setDropdown] = useState([]);
    const [fact, setFact] = useState([]);
    const [tempfactura, settemp] = useState({ TipoDeMuestra: '', Cantidad: 0, Detalle:'', Codigo: '', Costo: 0});
    const [venta, setventa] = useState({ fecha: (new Date).toDateString().slice(4), entregado:'', ClienteID:0, total: 0});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        settemp({ ...tempfactura, [name]: value });
    };

    const handleInputChangeEntregado = (e) => {
        const { name, value } = e.target;
        setventa({ ...venta, [name]: value });
    };


    const handleChangeDrop = (event) => {
        setSelectedOption(event.target.value);
        selectedCedula=selectedOption.id;
        
    };

    useEffect(() => {
        fetchDropdown();
  
    }, []);

    const sumarTotal= async () =>{
        var total=0;
        for (var i = 0; i < fact.length; i++) {
            total += fact[i].Costo*fact[i].Cantidad;
        }
        total +=tempfactura.Costo*tempfactura.Cantidad;
        total += total*0.02;
        setTotaliva({totaliva:total});
    }

    const aceptaVenta= async () =>{
        try {


            venta.ClienteID=selectedOption;
            venta.total=totaliva.totaliva;
            
            
            await axios.post('http://localhost:3000/api/FacturaVenta', venta);
            
            for (var i = 0; i < fact.length; i++) {
                await axios.post('http://localhost:3000/api/Venta', fact[i]);
            }
            
            

            

            alert('factura reallizada con exito');
        } catch (error) {
            console.error('Error al analizar la venta:', error);
        }
    }

    const addFact = async (prod) => {

        if (tempfactura.TipoDeMuestra === ''|| tempfactura.Cantidad=== 0  || tempfactura.Codigo=== '' || tempfactura.Costo=== 0 ){
            alert('los datos no han sido ingresados correctamente');
        }else{
            var num= await axios.get('http://localhost:3000/api/ultimafactura');
            var nuevaVenta = tempfactura;
        
            const newFact = [...fact,nuevaVenta];
            
            setFact(newFact);
            sumarTotal();
        }
        //await axios.put('http://localhost:3000/api/productoDec/'+selectedProduct);

    };
    
    const fetchDropdown = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/clientes');
          setDropdown(response.data);
        } catch (error) {
          console.error('Error fetching libros:', error);
        }
    };
    function redirigir(destino) {
        // Cambia 'url_destino' por la URL a la que deseas redirigir
        window.location.href = destino;
    }

    function enviarCorreo() {
        var destinatario = 'testeo.enviador@gmail.com';
        var asunto = 'Asunto del correo';
        var archivoAdjunto = document.getElementById('archivoAdjunto');
        if (archivoAdjunto.files.length > 0) {
            // Obtener el primer archivo seleccionado
            var adjunto = archivoAdjunto.files[0];

            // Crear el enlace de correo electrónico con el archivo adjunto
            var link = 'mailto:' + destinatario +
                       '?subject=' + encodeURIComponent(asunto) +
                       '&body=' + encodeURIComponent('Adjunto de archivo.') +
                       '&attachment=' + encodeURIComponent(adjunto);
            window.location.href = link;
        } else {
            var linkSinAdjunto = 'mailto:' + destinatario +
                                 '?subject=' + encodeURIComponent(asunto) +
                                 '&body=' + encodeURIComponent('Sin archivo adjunto.');

            // Abrir la ventana de correo electrónico sin adjunto
            window.location.href = linkSinAdjunto;
        }
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
                    <a href='/empleado' class='nav-path'>Venta</a>
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

                        
                        
                        
                        <div className=' registro-venta rounded-corner bg-gray'>
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
                            <input type="texto" placeholder='' className='input-agregar-cliente' name='entregado' value={tempfactura.entregado} onChange={handleInputChangeEntregado} required/>
                            
                            <div className='caja-div-text'>
                                <h3 className='p-3 pt-4 agregar-cliente-text' >Fecha: {(new Date).toDateString().slice(3)}</h3>
                            </div>
                            
                            </div>
                            <div className='d-flex'>
                            <div >
                                <div className='d-flex'>
                                    <h3 className='p-3 pt-4 agregar-cliente-text' >Tipo de muestra:</h3>
                                    <input type="texto" placeholder='' id='tipo' className='venta-litcaja' name='TipoDeMuestra' value={tempfactura.TipoDeMuestra} onChange={handleInputChange} required/>
                                </div>
                                <div className='d-flex'>
                                <h3 className='p-3 pt-4 agregar-cliente-text'  >Codigo:</h3>
                                <input type="texto" placeholder='' id='codigo' className='venta-litcaja' name='Codigo' value={tempfactura.Codigo} onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <h3 className='p-3 pt-4 agregar-cliente-text' >Detalles:</h3>
                                    <textarea  type="texto" placeholder='' id='detalle' className='bloketexto' name='Detalle' value={tempfactura.Detalle} onChange={handleInputChange} required/>
                                </div>
                                <div className='d-flex'>
                                    <h3 className='p-3 pt-4 agregar-cliente-text' >Cantidad:</h3>
                                    <input  type="number" placeholder='' id='cantidad' className='venta-litcaja' name='Cantidad' value={tempfactura.Cantidad} onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className=''>
                                <div className='d-flex'>
                                <h3 className='p-3 pt-4 agregar-cliente-text' >Costo:</h3>
                                <input type="number" placeholder='' id='costo' className='venta-litcaja' name='Costo' value={tempfactura.Costo} onChange={handleInputChange} required/>
                                </div>
                                <div className='d-flex p-4'>
                                <button className='boton-venta'  onClick={() => addFact()}> Agregar fila +</button>
                                </div>
                            </div>
                            
                            </div>

                            
                            

                            <table className="table" >
                                <thead>
                                    <tr className="table-primary">
                                    <th>Tipo De Muestra</th>
                                    <th>Cantidad</th>
                                    <th>Detalle De Analisis</th>
                                    <th> Codigo</th>
                                    <th>Costo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fact.map((libro, index) => (
                                    <tr key={libro.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                                        <td>{libro.TipoDeMuestra}</td>
                                        <td>{libro.Cantidad}</td>
                                        <td>{libro.Detalle}</td>
                                        <td>{libro.Codigo}</td>
                                        <td>{libro.Costo}</td>

                                        <td>
                                        </td>
                                    </tr>
                                    ))} 
                                </tbody>
                            </table>
                            

                        </div>
                        <div className='align-items-center'>

                            <div className='d-flex align-items-center button-container'>
       
                                <label for="archivoAdjunto"  className=' text-venta'>Adjuntar archivo</label>
                                <input type="file" id="archivoAdjunto" name="photo" />

                                <h3 className='factura-text' >Total 2% IVA: {totaliva.totaliva}</h3>
                                
                                <button className='boton-venta'  onClick={() => aceptaVenta()} > Aceptar factura</button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Venta