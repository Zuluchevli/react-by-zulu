import { AddContact } from './api/api(handle)';
import './CSS/Contact.css';

import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = async (r) => {
        r.preventDefault()
        // console.log(name);
        // console.log(email);
        // console.log(phone);

        const curr_user = localStorage.getItem("currentUserEmail") || null;
        await AddContact({ name, email, phone ,curr_user});
        alert("Contact Added......")
        setEmail("")
        setName("")
        setPhone("")
    }

    return <>
        <div className="contact-container">
            <h1 style={{ color: "blue" }}>Contact Form</h1>
            <form onSubmit={handleSubmit} className="contact-form" >
                <input type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                <input type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(b) => setEmail(b.target.value)}
                    required />
                <input type="number"
                    placeholder="Enter your Phone NO."
                    value={phone}
                    onChange={(a) => setPhone(a.target.value)}
                    required />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    </>
}
