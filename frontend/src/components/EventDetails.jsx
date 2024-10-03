import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import AxiosInstance from './AxiosInstance'
import  Box  from '@mui/material/Box'

const EventDetails = () => {

  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState(true)
  
  const MyParams = useParams()
  const MyId = MyParams.id
  console.log(MyParams)
  console.log(MyId)

  const GetData = () =>{
    AxiosInstance.get(`appointments/${MyId}`).then((res)=>{
      setEvents(res.data)
      setLoading(false)
      console.log(res.data)
    })
  }

  useEffect(()=>{
    GetData();
  },[])

  

  return (
    <div>
      { loading ? <h3> Loading the data </h3> :

      <>
        <Box sx={{boxShadow:3, padding: '20px', display:'flex', flexDirection:'row', marginBottom:'20px'}}>
          <Box sx={{fontWeight:'bold'}}>Name: </Box>
          <Box sx={{marginLeft:'10px'}}>{events.title}</Box>
        </Box>

        <Box sx={{boxShadow:3, padding: '20px', display:'flex', flexDirection:'row', marginBottom:'20px'}}>
          <Box sx={{fontWeight:'bold'}}>Status: </Box>
          <Box sx={{marginLeft:'10px'}}>{events.classNames}</Box>
        </Box>

        <Box sx={{boxShadow:3, padding: '20px', display:'flex', flexDirection:'row', marginBottom:'20px'}}>
          <Box sx={{fontWeight:'bold'}}>Start Date: </Box>
          <Box sx={{marginLeft:'10px'}}>{events.start}</Box>
        </Box>

        <Box sx={{boxShadow:3, padding: '20px', display:'flex', flexDirection:'row', marginBottom:'20px'}}>
          <Box sx={{fontWeight:'bold'}}>End Date: </Box>
          <Box sx={{marginLeft:'10px'}}>{events.end}</Box>
        </Box>
      </>


      }

    </div>
  )
}

export default EventDetails