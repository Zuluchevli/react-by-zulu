import { useState } from "react"

export default function RagisterUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password", password);

    }

    return (<>
        <div style={styles.container}>
            <h2>Register</h2>

            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    required
                />

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

                <button type="submit" style={styles.button}>Register</button>
            </form>
        </div>
    </>
    );
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
        background: "#2196F3",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
    },
};
