import { NavLink } from "react-router-dom"


const Nav = () => {
    return (
        <nav>
            <NavLink to={"/"}>
                <h5>Home</h5>
            </NavLink>
            <NavLink to={"/registration"}>
                <h5>Register</h5>
            </NavLink>
            <NavLink to={"/login"}>
                <h5>login</h5>
            </NavLink>
        </nav>
    )
}

export default Nav
