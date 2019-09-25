import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signup } from "../../ApiClient";
import { NavLink } from 'react-router-dom'

function Login(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupClicked = async () => {
        if (!name) {
            alert("name is required")
            return
        }
        if (!email) {
            alert("email is required")
            return
        }
        if (!password) {
            alert("password is required")
            return
        }
        const auth = await signup(name, email, password)
        console.log(auth)
        if (auth) {
            props.history.push('/feed')
        } else {
            alert("something went wrong, try again!")
        }

    }
    return (
        <div className="auth-box">
            <div>Sign up</div>
            <TextField id="standard-name-input"
                label="Name"
                type="text"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <Button onClick={signupClicked} variant="contained" color="primary">Sign Up</Button>
            <div>Already have an account?
                <NavLink to={`/login`}>Log in</NavLink>
            </div>
        </div>
    )
}

export default Login
