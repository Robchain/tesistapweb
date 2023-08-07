import React from 'react'
import { Col, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import ubicacion from '../assets/UBICACION_Mesa de trabajo 1.png'
import Rejoj from '../assets/HORARIO_Mesa de trabajo 1.png'
import Telefono from '../assets/TELEFONO_Mesa de trabajo 1.png'
import Mail from '../assets/INFO_Mesa de trabajo 1.png'
import LogoPE from '../assets/PE_Mesa de trabajo 1.png'
import BPichincha from '../assets/BANCO PICHINCHA_Mesa de trabajo 1.png'
import BGuayquil from '../assets/BANCO DE GUAYAQUIL_Mesa de trabajo 1.png'
import BPacifico from '../assets/BANCO DEL PACIFICO_Mesa de trabajo 1.png'

export const Footer = () => {
  return (
    <footer style={{width:"100%", height:"100%", backgroundColor:"#053e60"}} className='mt-3'>
<Row className='justify-content-between'>
    <Col lg="6" xl="6" md="6" sm='12' xs='12'>
        <div className='  d-flex  align-items-center'>
            <div>
                <img src={Rejoj} alt='Horarios de atencion' width={50}/>
            </div>
            <div>
        <h4 style={{color:"red"}}>HORARIOS DE ATENCIÓN</h4>
        <span style={{fontWeight:700,color:"white"}}>Lunes-Viernes/08H30-17H30</span><br/>
        <span style={{fontWeight:700,color:"white"}}>Sabados/08H30-14H30</span>
        </div></div>
        <div className='mt-4  d-flex  align-items-center'>
            <div>
            <img src={ubicacion} alt='Horarios de atencion' width={45}/>
            </div>
            <div>
            <span style={{fontWeight:700,color:"white"}}>Av, Franciso de Orellana 1200-Av. Plaza Dañin</span><br/>
            <span style={{fontWeight:700,color:"white"}}>Guayaquil-Ecuador</span>
        </div></div>
        <div className='mt-4  d-flex  align-items-center'>
        <div>
            <img src={Telefono} alt='Horarios de atencion' width={45}/>
            </div>
            <div>
            <span style={{fontWeight:700,color:"white"}}>096 046 6868</span><br/>
            <span style={{fontWeight:700,color:"white"}}>095 981 3106</span>
        </div></div>
        <div className='mt-4 d-flex  align-items-center' style={{}}>
            <div>
            <img src={Mail} alt='Horarios de atencion' width={45}/>
            </div>
            <div><span style={{fontWeight:700,color:"white"}}> info@publienlace.com</span>
        </div></div>
        <div className='mt-4 d-flex  align-items-center' style={{backgroundColor:'red'}}>
            <div>
            <img src={LogoPE} alt='Horarios de atencion' width={45}/>
            </div>
            <div><span style={{fontWeight:700,color:"white"}}> Copyright 2023 Publienlace - Todos los derechos reservados.</span>
        </div></div>
    </Col>
    <Col lg="6" xl="6" md="6" sm='12' xs='12' >
        <Row className='justify-content-end'>
            <Col lg="8" className='mb-5'>
        <div style={{textAlign:'center'}} className="mx-3">
        <span style={{color:"red", fontSize:"16px"}}>SERVICIO AL CLIENTE</span><br/>
        <Link style={{color:'white', textDecoration:'none', fontWeight:700}} to={"/"}>
            Preguntas Frecuente
        </Link><br/>
        <Link style={{color:'white', textDecoration:'none', fontWeight:700}} to={"/"}>
    Atencion personalizada
        </Link><br/>
        <Link style={{color:'white', textDecoration:'none', fontWeight:700}} to={"/"}>
        Políticas de privacidad
        </Link><br/>
        <Link  style={{color:'white', textDecoration:'none', fontWeight:700}} to={"/"}>
        Terminos y Condiciones
        </Link>
        </div>
        </Col>
        <Col lg="8"  className='mt-5'>
        <div className='mt-4' style={{textAlign:'center'}}>
            <span style={{color:'red', fontSize:'20px'}}>FORMAS DE PAGO</span><br/>
            <span style={{color:'white', fontWeight:500}}>Transferencias Bancarias</span>
        </div>
        <div className='' style={{width:200, marginLeft:75}}>
        <img src={BPichincha} alt='Horarios de atencion' width={60}/>
        <img src={BPacifico} alt='Horarios de atencion' width={60}/>
        <img src={BGuayquil} alt='Horarios de atencion' width={60}/>
        </div>
        </Col>
        </Row>
    </Col>
</Row>
    </footer>
  )
}
