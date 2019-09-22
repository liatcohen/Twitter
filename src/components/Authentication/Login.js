import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login } from "../../ApiClient";

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginClicked = async () => {
        console.log(`Email: ${email}, Password: ${password}`)
        if (!email) {
            alert("email is required")
            return
        }
        if (!password) {
            alert("password is required")
            return
        }

        const auth = await login(email, password)
        if (auth) {
            props.history.push('/feed')
        } else {
            alert("Email and password dont match, try again!")
        }

    }
    return (
        <div className="auth-box">
            <div>Login</div>
            <TextField id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={loginClicked} variant="contained" color="primary">Login</Button>
        </div>
    )
}

export default Login
