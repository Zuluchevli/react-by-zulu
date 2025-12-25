import axios from "axios";
import { ContactURL, RagisterURL} from "./api.js";


export async function RagisterForm(user) {
    
    let res = await axios.post(RagisterURL,user);
    return res
}
export async function LoginUser(email,password) {

    let NewUser = await axios.get(`${RagisterURL}?email=${email}&password=${password}`)
    console.log(NewUser);
    
    let user = NewUser.data
    // console.log(user);
    if(user.length > 0){
        alert(`${user[0].name}Is LoggedIn...`)
      return  user;   
    }
    else{
        alert("no user found...!")
    }
    
}
export async function getContact(   ) {
    let res = await axios.get(ContactURL)
    return res
}
export async function AddContact(contact) {
    let ContRes = await axios.post(ContactURL,contact);
    return ContRes;
}
export async function editContact(id,contact) {
    let ContRes = await axios.patch(`${ContactURL}/${id}`,contact);
    return ContRes;
}

export async function deleteContactfromapi(id) {
    let res = await axios.delete(`${ContactURL}/${id}`)
}