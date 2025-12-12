import { AddContact } from './api/api(handle)';
import './CSS/Contact.css';

import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const  HandleSubmit = async(r) => {
        r.preventDefault()
        console.log(name);
        console.log(email);
        console.log(number);
        alert("Contact Added......")

        setEmail("")
        setName("")
        setNumber("")
        await AddContact({name,email,number});
    }

    return <>
        <div className="contact-container">
            <h1 style={{color:"blue"}}>Contact Form</h1>
            <form onSubmit={HandleSubmit}className="contact-form" >
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
                    value={number}
                    onChange={(a) => setNumber(a.target.value)}
                    required />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    </>
}
