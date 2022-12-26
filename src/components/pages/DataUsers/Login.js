import { useState } from "react";
import products from "../../../store/products";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {

        for (let i = 0; i < products.usersEmails.length; i++) {
            if (email === products.usersEmails[i]) {
                if (password === products.usersPasswords[i]) {
                    alert('confirmed')
                    return
                } else {
                    alert('no ')
                    return
                }
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