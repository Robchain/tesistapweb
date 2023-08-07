import React from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import publienlace from '../assets/publienlace.png'
import empastados from '../assets/EMPASTADOS 1080 X 1080 WEB_Mesa de trabajo 1.png'
import { ITarjetaProductos } from '../interface/ITarjetasProductos'



export const TarjetaProductos = ({Nombre,precio,url}:ITarjetaProductos) => {
  return (
    <Card style={{textAlign:'center'}}>
        <CardBody>
    <img src={empastados} alt='producto' width={300}/>
    <div className='imagen-abajo d-flex align-items-center'>
        <img src={publienlace} alt='logocolor' width={60} style={{marginRight:'10px'}}/>
        <span style={{fontWeight:500, fontSize:15}}>{Nombre}</span> 
    </div>
    <div className='mx-auto'>
        <p >Desde <span>{`$ ${precio}`}</span></p>
    </div>
    <Button style={{backgroundColor:'red', color:'#fff'}}>VER PRECIO</Button>
        </CardBody>
    </Card>
  )
}
