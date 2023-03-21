import React from 'react'
import { Col, Row } from 'reactstrap'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <footer style={{width:"100%", height:"300px", backgroundColor:"#053e60"}}>
<Row className='justify-content-between'>
    <Col lg="6">
        <div className=''>
        <h4 style={{color:"red"}}>HORARIOS DE ATENCIÓN</h4>
        <span style={{fontWeight:700,color:"white"}}>Lunes-Viernes/08H30-17H30</span><br/>
        <span style={{fontWeight:700,color:"white"}}>Sabados/08H30-14H30</span>
        </div>
        <div className='mt-4'>
            <span style={{fontWeight:700,color:"white"}}>Av, Franciso de Orellana 1200-Av. Plaza Dañin</span><br/>
            <span style={{fontWeight:700,color:"white"}}>Guayaquil-Ecuador</span>
        </div>
        <div className='mt-4'>
            <span style={{fontWeight:700,color:"white"}}>096 046 6868</span><br/>
            <span style={{fontWeight:700,color:"white"}}>095 981 3106</span>
        </div>
        <div className='mt-4'>
            <span style={{fontWeight:700,color:"white"}}> info@publienlace.com</span>
        </div>
    </Col>
    <Col lg="6"  className=''>
        <Row className='justify-content-end'>
            <Col lg="8">
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
        <Col lg="8" >
        <div className='mt-4' style={{textAlign:'center'}}>
            <span style={{color:'red', fontSize:'20px'}}>FORMAS DE PAGO</span><br/>
            <span style={{color:'white', fontWeight:500}}>Transferencias Bancarias</span>
        </div>
        </Col>
        </Row>
    </Col>
</Row>
    </footer>
  )
}
