import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate()
    const alluser = {
        admin: { password: 'admin123', role: 'admin' },
        user: { password: 'user123', role: 'user' }
    };

    const auth = () => {
        const loguser = document.getElementById("us").value;
        const user = alluser[loguser];
        if (user && user.password === password) {
            localStorage.setItem('userRole', user.role);
            if (user.role == "admin") {
                navigate('/admin/dashboard')
            } else {
                navigate('/restrict')
            }
        } else {
            navigate('/restrict')
        }
    }


    return (
        <div className="loginform">
            <form onSubmit={auth} >
            
                <h3 className="logHead">Login</h3>
                <label>Username:<input type="text" id="us" name="username" onChange={(e) => setUser(e.target.value)} required /></label>
                <label>Password:<input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required /></label>
                <label><input className="logSub" type="submit" value="Login" /></label>
            </form>
            <div className="logCred">
                <h5>User</h5><ul>username: user</ul><ul>password: user123</ul>
                <ul></ul>
                <h5>Admin</h5><ul>username: admin</ul><ul>password: admin123</ul>
            </div>
        </div>
    )
}

export default Login;