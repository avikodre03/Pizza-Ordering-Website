import React from 'react'
import './OrderSuccess.css'
import { useNavigate } from 'react-router'
const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className='OrderSuccess'>
      <div className="topdiv">
        <button
         onClick={() => {
          navigate("/")
        }}
        >Home</button>
      </div>
      <div className="bottom">
        <img src="https://en.pimg.jp/048/246/347/1/48246347.jpg" alt="" />
      </div>
    </div>
  )
}

export default OrderSuccess