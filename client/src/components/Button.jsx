import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const Button = ({styles}) => {
  return (
    <div>
        <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounder-[10px] outline-none ${styles}`}>
          Register
        </button>
      
    </div>
  )
}

export default Button
