import React from "react"
import "../css/Layout.css";
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        // schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        plugins={[ timeGridPlugin ]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: '',
          right: ''
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
    )
  }
}
