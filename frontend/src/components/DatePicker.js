import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Container } from "@mui/material";
import "../css/Layout.css";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container maxWidth="sm">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} open={true} />
    </Container>
  );
}
