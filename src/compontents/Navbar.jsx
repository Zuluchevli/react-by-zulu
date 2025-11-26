import { Link } from "react-router";
export default function Navbar(){
    return (<>
        <Link to={"/"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/contact"}>Contact</Link>
    </>);
}   