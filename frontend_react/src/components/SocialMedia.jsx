import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
// import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/preeti-singh-a1b63b149/" target="_blank"><FaLinkedin/></a>
        </div>
        <div>
           <a href="https://github.com/psthegeek" target="_blank"><FaGithub/></a> 
        </div>
        <div>
            <a href="https://www.instagram.com/erraticfeelings" target="_blank"><FaInstagram/></a>
        </div>
      
    </div>
  )
}

export default SocialMedia
