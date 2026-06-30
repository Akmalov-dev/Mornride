import React from 'react'
import "../Footer/footer.css"

import Global from '../Footer/footer images/Global.png'
import Facebook from "../Footer/footer images/facebook.png"
import Twitter from "../Footer/footer images/twitter.png"
import Youtube from "../Footer/footer images/youtube.png"
import Linkedin from "../Footer/footer images/linkedin.png"
import Instagram from "../Footer/footer images/instagram.png"

const footer = () => {
  return (
    <>
      <hr />
    <div className='footer'>
       <div className='copyright'>
        <img className='img-global' src={Global} alt="global picture" />
        <p className='f-copyright'>COPYRIGHT 2023</p>
      </div>
      <div className='footer-middle'>
        <a href="">TERMS OF SERVICE</a>
        <a href="">POLICY SERVICE</a>
        <a href="">COOKIES SETTINGS</a>
        <a href="">LEGAL INFORMATION</a>
      </div>
      <div className='footer-right'>
        <img className='social-network' src={Facebook} alt="facebook" />
        <img className='social-network' src={Twitter} alt="twitter" />
        <img className='social-network' src={Youtube} alt="youtube" />
        <img className='social-network' src={Linkedin} alt="linkedin" />
        <img className='social-network' src={Instagram} alt="instagram" />
      </div>
    </div>
    </>
  )
}

export default footer