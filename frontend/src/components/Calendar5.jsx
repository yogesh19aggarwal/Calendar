import {React, useEffect, useState} from 'react'
import MyCalendar5 from './calenders/MyCalendar5'
import AxiosInstance from './AxiosInstance'
import '../App.css'
import MultiSelectForm from './form/MultiSelectForm'
import  Box  from '@mui/material/Box'

const Calendar5 = () => {

  const [events, setEvents] = useState([])
  const [statusOptions, setStatusOptions] = useState()
  const [selectedStatus, setselectedStatus] = useState([])

  const filteredEvents = events.filter((event) => selectedStatus.includes(event.classNames));

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
      <Box sx={{boxShadow:3, padding:'20px', display:'flex', justifyContent:'space-evenly', marginBottom:'20px'}}>
        <Box sx={{width: '30%', }}>
          <MultiSelectForm
            label={"Status"}
            options={statusOptions}
            setSelectedValue={setselectedStatus}
            selectedValue={selectedStatus}/>
        </Box>

        <Box sx={{width: '30%', }}>

        </Box>

        <Box sx={{width: '30%', }}> 

        </Box>

      </Box>

      <Box sx={{boxShadow:3, padding:'20px'}}>
        <MyCalendar5
          myEvents={filteredEvents}/>
      </Box>
      </>
    }
    </>
  )
}

export default Calendar5