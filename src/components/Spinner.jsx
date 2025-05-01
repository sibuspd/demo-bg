import React from 'react'
import { ClipLoader } from 'react-spinners'

function Spinner() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <span className="loading loading-ring loading-xl"></span>
        <ClipLoader color="#007bff" loading={true} size={50}/>
    </div>
  )
}

export default Spinner