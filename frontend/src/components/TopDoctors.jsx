import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate=useNavigate()
    const {doctors}=useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 md:mx-10 text-gray-900'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:2-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full gap-4 pt-5 gap-y-6 px-3 sm:px-0 grid grid-cols-auto'>
            {doctors.slice(0,12).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] ' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availbale</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm '>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-primary py-3 px-12 rounded-full text-blue-50 mt-10'>more</button>
    </div>
  )
}

export default TopDoctors