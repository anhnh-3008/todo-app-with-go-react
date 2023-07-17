import "../css/Layout.css";
import { Alert, Snackbar } from "@mui/material";

export default function Toast ({ open, setOpen, type, message }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        { message }
      </Alert>
    </Snackbar>
  )
}
