import React from 'react'
import './contact.css'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Reciba el NewsLetter</h1>
      <form action="" id='form'>
        <input type="text" name="Name" id="name" placeholder='Name' />
        <input type="email" name='Mail' id='mail' placeholder='Mail' />
        <button id='btn'>Submit</button>
      </form>
      <Footer />
    </div>
  )
}

export default Contact