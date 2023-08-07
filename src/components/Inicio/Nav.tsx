import publienlace from "../../assets/PUBLIENLACE LOGO _Mesa de trabajo 1.png"
import { Navbar, NavbarBrand, Nav as Navdos, NavItem, NavLink} from 'reactstrap';

export const Nav = () => {
  return (
     <Navbar style={{fontWeight:'600'}}>
     <NavbarBrand tag={'span'}>
      <img
        alt="logo"
        src={publienlace}
        style={{
          width: 250,
        }}
      />
    </NavbarBrand>
    <Navdos   justified>
        <NavItem>
            <NavLink  href="#" className="asd">
            CONÓCENOS
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
            DISEÑO
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
           PRODUCTOS
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
        CONTACTENOS 
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
           CATALOGO
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
           PROMOSIONES
            </NavLink>
        </NavItem>
      </Navdos>
     </Navbar>

  )
}
