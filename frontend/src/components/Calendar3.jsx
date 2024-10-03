import {React, useEffect, useState} from 'react'
import MyCalendar3 from './calenders/MyCalendar3'
import AxiosInstance from './AxiosInstance'

const Calendar3 = () => {

  const [events, setEvents] = useState()

  const GetData = () =>{
    AxiosInstance.get(`appointments/`).then((res)=>{
      console.log(res.data)
      setEvents(res.data)
    })
  }

  useEffect(()=>{
    GetData();
  },[])

  return (
    <div><MyCalendar3 
    myEvents={events}/></div>
  )
}

export default Calendar3