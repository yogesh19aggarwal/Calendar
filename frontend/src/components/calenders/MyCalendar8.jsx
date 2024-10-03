import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useNavigate } from 'react-router-dom'
import interactionPlugin from '@fullcalendar/interaction';

const MyCalendar8 = ({myEvents, dayClickAction}) => {

  const navigate = useNavigate()

  const eventClick=(data)=>{
    navigate(`/eventdetails/${data.event.id}/${data.event.title}`)
  }

  // const dayClickedAction= (info) =>{
  //   alert('Clicked on: '+ info.dateStr)
  // }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, multiMonthPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      events={myEvents}
      eventClick={eventClick}
      dateClick={dayClickAction}

      views={{
        multiMonth3:{
          type: 'multiMonth',
          duration: {months: 3},
          titleFormat: {month: 'short', year:'numeric'},
          columnHeaderFormat: {weekday: 'short'},
          buttonText: "3 Months"
        }
      }}

      headerToolbar={
        {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek, listDay, multiMonth3'
        }
      }
    />
  )
}

export default MyCalendar8