import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import IconButton from '@mui/material/IconButton';


export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
        //initialView="dayGridMonth"
        locales={'es'}
        eventContent={renderEventContent}
        events={[
          { title: 'event 1', date: '2022-11-01' },
          { title: 'event 2', date: '2022-11-02' }
        ]}
        
      />
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr) 
  }
}


function renderEventContent(eventInfo) {
  return (
    <div style={{display:"flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignContent: "center"}}>
      <div style={{alignSelf: "center"}}>
        <i>{eventInfo.event.title}</i>
      </div>
      <div style={{alignSelf: "center"}}>
        <IconButton color="primary" aria-label="editar" >
          <CreateRoundedIcon />
        </IconButton>
      </div>
    </div>
  )
}