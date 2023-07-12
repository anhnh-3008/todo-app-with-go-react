import LoginForm from "../components/LoginForm";
import { useState } from "react";
import "../css/Layout.css";
import Toast from "../components/Toast";

export default function LoginPage () {
  const [openToast, setOpenToast] = useState(false)
  const [typeToast, setTypeToast] = useState("error")
  const [messageToast, setMessageToast] = useState("")

  return (
    <div className="background">
      <Toast open={openToast} setOpen={setOpenToast} type={typeToast} message={messageToast} />
      <LoginForm setOpenToast={setOpenToast} setTypeToast={setTypeToast} setMessageToast={setMessageToast} />
    </div>
  )
}
