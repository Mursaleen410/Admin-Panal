import React from 'react'
import './Right.css'
import Updates from '../Updates/Updates'
import Customerreview from '../Customerreview/Customerreview'
const Right = () => {
  return (
    <div className='RightSide'>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <Customerreview />
      </div>
    </div>
  )
}

export default Right
