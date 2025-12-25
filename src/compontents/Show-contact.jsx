import { useEffect, useState } from "react";
// import { getContact } from "../apis/handle_api.js"
import { deleteContactfromapi, getContact,editContact } from "./api/api(handle).js";
// import { Button, Modal, handleClose, show, Form } from 'react-bootstrap';
// import { Button, Modal, handleClose, show, Form } from 'react-bootstrap';



export default function Showcontact() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [Contact, setcontact] = useState([])

    const deleteContact = async (id) => {
        await deleteContactfromapi(id)
        fetchdata()
    }
    async function fetchdata() {
        let data = await getContact();
        console.log(data.data);
        setcontact(data.data)

    }

    const handleEdit = (c) => {
        console.log(c.id,c.name,c.email,c.phone);
        document.getElementById("editform").style.display = "block";
        setId(c.id)
        setName(c.name)
        setEmail(c.email)
        setPhone(c.phone)
        
    }
    
    
    const handleEditSubmit = async (r) => {
        r.preventDefault()
       console.log("edit func",{ name, email, phone });
       
        await editContact(id,{ name, email, phone });
        alert("Contact Updated......")
        setEmail("")
        setName("")
        setPhone("")
        document.getElementById("editform").style.display = "none   ";
        fetchdata()
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>

            <div>Showcontact</div>
            <table border={2}>
                <tr>
                    <th>
                        name
                    </th>
                    <th>email</th>
                    <th>password</th>
                </tr>
                <tbody>
                    {
                        Contact.map((c) => (
                            <tr key={c.id}>
                                <td>{c.name}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td><button onClick={() => { deleteContact(c.id) }}>Delete</button></td>
                                <td><button onClick={() => { handleEdit(c) }}>Edit</button></td>
                            </tr>

                        ))


                    }
                </tbody>

            </table>

            <div id="editform"  style={{ display: "none" }}>

                <form action="" onSubmit={handleEditSubmit} >
                    <input type="text"
                        placeholder="Enter your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required /> <br />
                    <input type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(b) => setEmail(b.target.value)}
                        required /> <br />
                    <input type="number"
                        placeholder="Enter your Phone NO."
                        value={phone}
                        onChange={(a) => setPhone(a.target.value)}
                        required /> <br />
                    <button type="submit">Edit Contact</button>

                </form>

            </div>

            {/* Model */}
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>

    )
}