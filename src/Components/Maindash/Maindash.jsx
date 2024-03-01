import React from 'react'
import './Maindash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const Maindash = () => {
  return (
    <div className='maindash'>
      Dashboard
      <div>

      <Cards />
      <Table />
      </div>
    </div>
  )
}

export default Maindash
