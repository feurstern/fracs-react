'use client'
import Image from 'next/image'
import React from 'react'
import { stop } from '../Assets'
import styles from '../style'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
 
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
 
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={`${styles.flexCenter}`}>
          <h2>Oops, Ada Yang Salah!</h2>
          <Image src={stop} />
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Coba Lagi?
          </button>
        </div>
      )
    }
 
    // Return children components in case of no error
 
    return this.props.children
  }
}
 
export default ErrorBoundary