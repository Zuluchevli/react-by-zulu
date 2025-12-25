import { useState } from "react"
import { useNavigate } from "react-router";
import { LoginUser } from "./api/api(handle).js";
// import "./CSS/ALLCss.css";


export default function Login() {
    const navigator = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Email:", email);
        console.log("Password :", password);

        // window.location.replace('http://localhost:3000/register');
        if (!email || !password) {
            alert("You must have to enter your email and password");
            return;
        }
        let user = await LoginUser(email, password)
        navigator("/contact")
        console.log(user);

        // if (email === Saveuser.email && password === Saveuser.password) {
        //     alert("Login was successFull....")
        //     localStorage.setItem("currUser", "true");
        //     return;

        // } else {
        //     alert("invalid email & password")
        //     setEmail("")
        //     setPassword("")
        //     return;
        // }
        // if (UserForm && UserForm.length > 0) {
        //     alert("Login successful");
        //     localStorage.setItem("loggedIn", "true");
        //     localStorage.setItem("currentUserEmail", email);
        //     navigator("/contact");
        // } else {
        //     alert("Invalid email & password");
        //     setEmail(""); setPassword("");
        // }
    }
    const Pathragister = (a) => {
        a.preventDefault()
        navigator("/register")
    }
    return <>
        <div style={styles.container}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}
                style={styles.form} >
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                // required
                />

                <button type="submit" style={styles.button} >Login</button>
                <div style={{ marginTop: 8 }}>
                    Don't have an account?{" "}
                    <button type="button" onClick={Pathragister} style={styles.linkButton}>
                        Register
                    </button>
                </div>
            </form>
        </div>

    </>
}

const styles = {
    container: {
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#f1f1f1",
        textAlign: "center",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },

    input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #999",
    },

    button: {
        padding: "10px",
        background: "#4CAF50",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
    },
    linkButton: {
        padding: "6px 10px",
        marginLeft: 6,
        background: "transparent",
        color: "#007bff",
        border: "none",
        cursor: "pointer",
        textDecoration: "underline",

    }
}