import {React, useEffect, useState} from 'react'
import MyCalendar8 from './calenders/MyCalendar8'
import AxiosInstance from './AxiosInstance'
import '../App.css'
import dayjs from 'dayjs'
import MultiSelectForm from './form/MultiSelectForm'
import  Box  from '@mui/material/Box'
import DatePickerForm from './form/DatePickerForm'
import MyModal from './utils/MyModal'

const Calendar8 = () => {

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState([false]);

  const handleOpen = (info) => {
    setOpen(true)
    setSelectedDate(info.dateStr)
  };

  const handleClose = () => setOpen(false);

  const [events, setEvents] = useState([])
  const [statusOptions, setStatusOptions] = useState()
  const [selectedStatus, setselectedStatus] = useState([])

  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)

  const fromDateChange = (newDate) =>{
    setFromDate(newDate)
    console.log("fromDate", newDate.format('DD-MM-YYYY'))
  }
  
  const toDateChange = (newDate) =>{
    setToDate(newDate)
    console.log("toDate", newDate.format('DD-MM-YYYY'))
  }
  

  const filteredEvents = events.filter((event) => 
    selectedStatus.includes(event.classNames) && (!fromDate || dayjs(event.start).isAfter(fromDate, 'day')) && (!toDate || dayjs(event.end).isBefore(toDate, 'day'))
  );

  const [loading, setLoading] = useState(true)


  const GetData = () =>{
    AxiosInstance.get(`appointments/`).then((res)=>{
      setEvents(res.data)
      setStatusOptions([...new Set(res.data.map((events)=>events.classNames))])
      setselectedStatus([...new Set(res.data.map((events)=>events.classNames))])
      setLoading(false)
      console.log(res.data)
    })
  }

  useEffect(()=>{
    GetData();
  },[])

  return (
    <>
    {loading? <h1>Loading</h1> :
    <>
      <MyModal
        open = {open}
        handleClose={handleClose}
        myDate={selectedDate}
      />
      <Box sx={{boxShadow:3, padding:'20px', display:'flex', justifyContent:'space-evenly', marginBottom:'20px'}}>
        <Box sx={{width: '30%', }}>
          <MultiSelectForm
            label={"Status"}
            options={statusOptions}
            setSelectedValue={setselectedStatus}
            selectedValue={selectedStatus}/>
        </Box>

        <Box sx={{width: '30%', }}>
          <DatePickerForm
            label={"From Date"} 
            value = {fromDate}
            onChange={fromDateChange}
          />
        </Box>

        <Box sx={{width: '30%', }}> 
          <DatePickerForm
            label={"To Date"}
            value = {toDate}
            onChange={toDateChange}
          />
        </Box>

      </Box>

      <Box sx={{boxShadow:3, padding:'20px'}}>
        <MyCalendar8
          myEvents={filteredEvents}
          dayClickAction = {handleOpen}/>
      </Box>
      </>
    }
    </>
  )
}

export default Calendar8