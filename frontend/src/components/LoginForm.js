import "../css/Layout.css";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, Switch, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"

function EmailInput ({ email, emailError, setEmail }) {
  return (
    <TextField
      required
      id="email-input"
      label="Email address"
      placeholder="name@example.com"
      name="email-input"
      type="email"
      sx={{mb: 3}}
      value={email}
      error={emailError}
      helperText={emailError ? "Not blank" : ''}
      onChange={e => setEmail(e.target.value)}
    />
  );
}

function PasswordInput ({ password, passwordError, setPassword }) {
  return (
    <TextField
      required
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      placeholder="Your password"
      name="password-input"
      sx={{mb: 3}}
      value={password}
      error={passwordError}
      helperText={passwordError ? "Not blank" : ''}
      onChange={e => setPassword(e.target.value)}
    />
  )
}

function RememberCheckbox () {
  return (
    <FormControlLabel control={<Switch />} label="Remember me" name="is_remember" id="custom-switch" />
  )
}

function LinkSignup () {
  return (
    <div className="link-sign-up">
      <Link to="/signup">Sign up if you don't have an account!</Link>
    </div>
  )
}

export default function LoginForm ({setOpenToast, setTypeToast, setMessageToast}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()

    setEmailError(false)
    setPasswordError(false)

    if (email === "") {
      setEmailError(true)
    }
    if (password === "") {
      setPasswordError(true)
    }
    if (email && password) {
      axios.post('/api/login', { 
        email: email,
        password: password
      }).then(res => {  
        setOpenToast(true)
        setTypeToast("success")
        setMessageToast("Login Success!")
      }).catch(error => {
        setOpenToast(true)
        setTypeToast("error")
        setMessageToast("Login Error!")
      });
    }
  }

  return (
    <FormControl className="login-form">
      <EmailInput email={ email } emailError={ emailError } setEmail={ setEmail }/>
      <PasswordInput password={ password } passwordError={ passwordError } setPassword={ setPassword } />
      <RememberCheckbox />
      <LinkSignup />
      <Button variant="outlined" color="secondary" type="submit" onClick={ handleSubmit }>Login</Button>
    </FormControl>
  );
}
