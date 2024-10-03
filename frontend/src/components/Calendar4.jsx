import {React, useEffect, useState} from 'react'
import MyCalendar4 from './calenders/MyCalendar4'
import AxiosInstance from './AxiosInstance'
import '../App.css'

const Calendar4 = () => {

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
    <div><MyCalendar4
    myEvents={events}/></div>
  )
}

export default Calendar4