import "../css/Layout.css"
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"

function EmailInput ({ email, emailError, setEmail, messEmailError }) {
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
      helperText={messEmailError}
      onChange={e => setEmail(e.target.value)}
    />
  );
}

function PasswordInput ({ password, passwordError, setPassword, messPasswordError }) {
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
      helperText={messPasswordError}
      onChange={e => setPassword(e.target.value)}
    />
  )
}

function RePasswordInput ({ rePassword, rePasswordError, setRePassword, messRePasswordError }) {
  return (
    <TextField
      required
      id="outlined-re-password-input"
      label="Re-Password"
      type="password"
      placeholder="Confirm password"
      name="re-password-input"
      sx={{mb: 3}}
      value={rePassword}
      error={rePasswordError}
      helperText={messRePasswordError}
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

export default function SignupForm ({setOpenToast, setTypeToast, setMessageToast}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [rePasswordError, setRePasswordError] = useState(false)
  const [messEmailError, setMessEmailError] = useState("")
  const [messPasswordError, setMessPasswordError] = useState("")
  const [messRePasswordError, setMessrRePasswordError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    setEmailError(false)
    setPasswordError(false)
    setRePasswordError(false)
    setMessEmailError("")
    setMessPasswordError("")
    setMessrRePasswordError("")


    axios.post('/api/signup', {
      email: email,
      password: password,
      rePassword: rePassword
    }).then(res => {
      setOpenToast(true)
      setTypeToast("success")
      setMessageToast("Signup Success! Let's login by your account.")
      setEmailError(false)
      setPasswordError(false)
      setRePasswordError(false)
      setMessEmailError("")
      setMessPasswordError("")
      setMessrRePasswordError("")
      setEmail("")
      setPassword("")
      setRePassword("")
    }).catch(resErr => {
      setOpenToast(true)
      setTypeToast("error")
      setMessageToast("Signup Error!")
      let errors = resErr.response.data.Error
      console.log(errors)
      Object.keys(errors).forEach(keyError => {
        switch (keyError) {
          case 'email':
            setEmailError(true)
            setMessEmailError(errors[keyError])
            break;
          case 'password':
            setPasswordError(true)
            setMessPasswordError(errors[keyError])
            break;
          case 'rePassword':
            setRePasswordError(true)
            setMessrRePasswordError(errors[keyError])
            break;
          default:
            return
        }
      });
    });
  }

  return (
    <FormControl className="login-form">
      <EmailInput email={ email } emailError={ emailError } setEmail={ setEmail } messEmailError={messEmailError} />
      <PasswordInput password={ password } passwordError={ passwordError } setPassword={ setPassword } messPasswordError={messPasswordError} />
      <RePasswordInput rePassword={ rePassword } rePasswordError={ rePasswordError } setRePassword={ setRePassword } messRePasswordError={messRePasswordError} />
      <LinkSignup />
      <Button variant="outlined" color="secondary" type="submit" onClick={ handleSubmit }>Signup</Button>
    </FormControl>
  );
}
