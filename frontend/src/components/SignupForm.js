import "../css/Layout.css"
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { Link } from "react-router-dom";

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

function RePasswordInput ({ rePassword, rePasswordError, setRePassword }) {
  return (
    <TextField
      required
      id="outlined-re-password-input"
      label="Re-password"
      type="password"
      placeholder="Confirm password"
      name="re-password-input"
      sx={{mb: 3}}
      value={rePassword}
      error={rePasswordError}
      helperText={rePasswordError ? "Not equal your password" : ''}
      onChange={e => setRePassword(e.target.value)}
    />
  )
}

function LinkSignup () {
  return (
    <div className="link-sign-up">
      <Link to="/">Login here if you had an account!</Link>
    </div>
  )
}

export default function SignupForm () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [rePasswordError, setRePasswordError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    setEmailError(false)
    setPasswordError(false)
    setRePasswordError(false)

    if (email === "") {
      setEmailError(true)
    } else if (password === "") {
      setPasswordError(true)
    } else if (rePassword === "" || rePassword !== password) {
      setRePasswordError(true)
    } else if (email && password && rePassword) {
      alert(`Signup success with email: ${email} and password: ${password}`)
      window.location.href = '/'
    }
  }
  
  return (
    <FormControl className="login-form">
      <EmailInput email={ email } emailError={ emailError } setEmail={ setEmail } />
      <PasswordInput password={ password } passwordError={ passwordError } setPassword={ setPassword } />
      <RePasswordInput rePassword={ rePassword } rePasswordError={ rePasswordError } setRePassword={ setRePassword }/>
      <LinkSignup />
      <Button variant="outlined" color="secondary" type="submit" onClick={ handleSubmit }>Signup</Button>
    </FormControl>
  );
}
