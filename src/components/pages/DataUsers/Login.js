import { useState } from "react";
import products from "../../../store/products";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = () => {
        // if(email === products.usersEmails)
        for(let i = 0; products.usersEmails.length;i++){
            if(email === products.usersEmails[i]){
                if(password === products.usersPasswords[i]){
                    alert(products.usersEmails.length)
                    alert('confirmed')
                }else{
                    alert('no ')
                }
            }else{
                return
            }
        }
    }

    return (
        <div>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                placeholder="email"
            />
            <label>Password</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value.toLowerCase())}
                placeholder="password"
            />
            <p>{password}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login