import React from 'react'
import Logo from '../img/footer.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt=""/>
      <span>Developed by <a className='gitlink' href='https://github.com/akshatdawange'>Akshat</a> and <a className='gitlink' href='https://github.com/Sruti-1602'>Sruti</a></span>
    </footer>
  )
}

export default Footer