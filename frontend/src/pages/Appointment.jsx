import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const {docId}=useParams()
  const {doctors}=useContext(AppContext)
  const fetchDocInfo=async()=>{
    const docInfo=doctors.find(doc=>doc._id===docId)
  }
  return (
    <div>
        
    </div>
  )
}

export default Appointment