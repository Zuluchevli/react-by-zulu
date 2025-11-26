import { useState } from "react"
// import { Navigate } from "react-router";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email:", email);
        console.log("Password :", password);

        alert("Login was successFull....")
        setEmail("")
        setPassword("")
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
                    required
                />

                <button type="submit" style={styles.button} >Login</button>
            </form>
            {/* <a href="./Ragister.jsx">utf</a> */}
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
}
