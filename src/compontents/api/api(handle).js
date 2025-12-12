import axios from "axios";
import { ContactURL, RagisterURL} from "./api.js";


export async function RagisterForm(user) {
  
    let res = await axios.post(RagisterURL,user);
    return res
}
export async function LoginUser(email,password) {

    let NewUser = await axios.get(`${RagisterURL}?email=${email}&password=${password}`)
    let user = NewUser.data
    console.log(user);
    if(user.length > 0){
      alert(user[0].name,"Is LoggedIn...")
    }
    
    
}
export async function AddContact(contact) {
    try {
        let res = await fetch(ContactURL,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(contact)
        })
        return await res.json();
    } catch (error) {
        console.log(error);
        
    }
}