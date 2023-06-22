import React from 'react'
import styles from '../style'

const Login = () => {
  return (
    <section className={`pt-[50px]`}>
      <div className={`${styles.flexCenter}`}> 
        <h1 className={`${styles.heading2}`}>
            Login
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] pt-[10px]`}>
            Login here
        </p>
      </div>
    </section>
  )
}

export default Login