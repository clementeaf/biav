import React from 'react'
import './nav.css'
import { GoSearch } from 'react-icons/go'
import Header from '../Header/Header'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Nav = () => {
  return (
    <div className='nav-container'>
      <div id='logo'>
        <h2 id='logo-letter-1'>BI</h2>
          <div className='line'></div>
        <h2 id='logo-letter-2'>AV</h2>
      </div>

      <div id='center'>
        
        <div id='lenguage'>
          <h3 id='idiom'>EN | ESP</h3>
        </div>

        <div id='search-bar'>
          <input type='search' id='bar'/>
          <div id='search-icon'><GoSearch /></div>
        </div>

      </div>
    </div>
  )
}

export default Nav