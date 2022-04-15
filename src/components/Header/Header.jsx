import React from 'react'
import './header.css'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <h1 id='biav'>BIAV</h1>
        <h3 id='subtitle'>Bienal Internacional de Arte Valparaiso</h3>
          <div id='biav-elements'>
            <div className='links'>
              <a href="#"><img className='icon' src={ instagram } alt="instagram" /></a>
              <a href="#"><img className='icon' src={ facebook } alt="facebook" /></a>
              <a href="#"><img className='icon' src={ twitter } alt="twitter" /></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header