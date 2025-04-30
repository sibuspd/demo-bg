import React from 'react'
import { ClipLoader } from 'react-spinners'

function Spinner() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <ClipLoader color="#007bff" loading={true} size={50}/>
    </div>
  )
}

export default Spinner