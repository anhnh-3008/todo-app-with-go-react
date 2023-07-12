import SignupForm from "../components/SignupForm";
import "../css/Layout.css";
import { useState } from "react";
import Toast from "../components/Toast";

export default function LoginPage () {
  const [openToast, setOpenToast] = useState(false)
  const [typeToast, setTypeToast] = useState("error")
  const [messageToast, setMessageToast] = useState("")

  return (
    <div className="background">
      <Toast open={openToast} setOpen={setOpenToast} type={typeToast} message={messageToast} />
      <SignupForm setOpenToast={setOpenToast} setTypeToast={setTypeToast} setMessageToast={setMessageToast} />
    </div>
  )
}
