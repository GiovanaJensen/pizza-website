import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

export function Navbar(){
    return(
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars /> 
                </NavIcon>
            </Nav>
        </>
    )
}