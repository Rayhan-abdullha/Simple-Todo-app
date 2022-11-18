import React from 'react'
import { useState } from 'react'

export default function VisibleBtn({displayVisible}) {
  const [statusShow, setStatus] = useState("all")
  const handleVisible = (status) => {
    displayVisible(status)
    setStatus(status)
  }
  return (
    <div className='visibilityBtn'>
        <button onClick={() => handleVisible("all")} style={{backgroundColor: statusShow === 'all' && '#0951bb', padding: statusShow === 'all' && "2px 10px"}} className='btn2 text-light'>All</button>
        <button onClick={() => handleVisible("complete")} style={{backgroundColor: statusShow === 'complete' && '#0951bb', padding: statusShow === 'complete' && "2px 10px"}} className='btn2 text-light'>Complete</button>
        <button onClick={() => handleVisible("incomplete")} style={{backgroundColor: statusShow === 'incomplete' && '#0951bb', padding: statusShow === 'incomplete' && "2px 10px"}} className='btn2 text-light'>InComplete</button>
    </div>
  )
}
