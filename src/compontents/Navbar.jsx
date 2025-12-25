import React from "react";
import { Link } from "react-router";
export default function Navbar() {
    return (<>
        <nav style={navStyles.nav}>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/Show_contact"}>ShowContact</Link>
        </nav>
    </>);
}
const navStyles = {
    nav: {
        display: "flex",
        gap: "12px",
        padding: "10px 20px",
        background: "#222",
        color: "#fff",
        alignItems: "center",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        padding: "6px 10px",
        borderRadius: 6,
    },
};