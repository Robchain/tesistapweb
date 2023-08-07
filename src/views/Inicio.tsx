import { Col, Container, Row } from "reactstrap"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Inicio/Nav"
import { TarjetaProductos } from "../components/TarjetaProductos"
import Data from "../Data/data.json"

export const Inicio = () => {
  return (<>
    <Container > 
   <Nav/>
<Row>
  {
    Data.map(i=>(
      <Col lg='4' sm='6' xl='4' md='4' className="mb-3">
<TarjetaProductos Nombre={i.Nombre} precio={i.Precio} url={i.Url} />
</Col>
    ))
  }
</Row>
    </Container>
   <Footer/>
    </>
  )
}
