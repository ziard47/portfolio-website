import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImBehance2} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/" target='_blank'><FaGithub/></a>
        <a href="https://behance.net/" target='_blank'><ImBehance2/></a>
    </div>
  )
}

export default HeaderSocials