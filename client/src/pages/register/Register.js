import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api"

export default function Register(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try{
            const res = await api.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");

        } catch (err) {
            console.log(err)
            setError(true);
        }
    };

    return(

        <div className="Register">

            <span className="RegisterTitle">Register</span>

            <form className="RegisterForm" onSubmit={handleSubmit}>
                
                <label>Username</label>
                <input 
                    type="text" 
                    className="RegisterInput" 
                    placeholder="Enter your username..."
                    onChange={e=>setUsername(e.target.value)}
                />
                
                <label>Email</label>
                <input 
                    type="text" 
                    className="RegisterInput" 
                    placeholder="Enter your email..."
                    onChange={e=>setEmail(e.target.value)}
                />
                
                <label>Password</label>
                <input 
                    type="password" 
                    className="RegisterInput" 
                    placeholder="Enter your password..."
                    onChange={e=>setPassword(e.target.value)}
                />
                
                <button className="RegisterButton" type="submit">
                    Register
                </button>

            </form>

            <button className="RegisterLoginButton">
                <Link to="/login" className="link">
                    Login
                </Link>
            </button>

            {
                error && 
                    <span style={{color: "red", marginTop: "10px"}}>
                        Something went wrong!
                    </span>
            }

        </div>
    )
}