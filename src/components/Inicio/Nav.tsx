import publienlace from "../../assets/publienlace.png"
import { Navbar, NavbarBrand, Nav as Navi, NavItem, NavLink} from 'reactstrap';

export const Nav = () => {
  return (
    <>
     <Navbar  >
     <NavbarBrand href="/">
      <img
        alt="logo"
        src={publienlace}
        style={{
          height: 60,
          width: 60,
        }}
      />
    </NavbarBrand>
    <Navi   className="mx-auto" justified>
        <NavItem>
            <NavLink   href="#">
            PROMOSIONALES
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
            DISEÑO
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
            IMPRENTA 
            </NavLink>
        </NavItem>
        
        <NavItem>
            <NavLink   href="#">
         GALERIA  
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
           NOSOTROS 
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink   href="#">
           CONTACTENOS
            </NavLink>
        </NavItem>
      </Navi>
     </Navbar>
     <hr/>
</>
  )
}
