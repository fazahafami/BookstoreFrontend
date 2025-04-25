import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-20 gap-10 px-5  pb-20  flex flex-wrap bg-gray-900 text-white mt-20">
        <div className='md:p-7 mt-4 '>
          <h1>ABOUT US</h1>
          <p className='mt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, facilis molestias. Magni veritatis animi exercitationem eveniet itaque nesciunt dolor fugiat praesentium beatae eaque, quod veniam. Suscipit sunt repudiandae exercitationem et!</p>
        </div>
        <div className='md:p-7 md:mt-4 '>
          <h1>NEWSLETTER</h1>
          <p className='mt-3'>Stay updated with our latest trends</p>
          <form className='mt-4'>
            <div className="flex items-center bg-white">
              <span className="pl-4 text-gray-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-amber-400 text-black px-4 py-2 hover:bg-amber-300"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
        </div>
        <div className='md:p-7 md:mt-4  '>
          <h1>FOLLOW US</h1>
          <p className='mt-3'>Lets be social</p>
          <div className='md:flex mt-3'>
            <FontAwesomeIcon icon={faInstagram} className='me-5' />
            <FontAwesomeIcon icon={faXTwitter} className='me-5' />
            <FontAwesomeIcon icon={faFacebook} className='me-5' />
            <FontAwesomeIcon icon={faLinkedin} className='me-5' />
          </div>
        </div>
      </div>
      <div className='text-white bg-black md:p-5 p-3 text-center'>
        <p className='md:block hidden'>Copyright © 2025 All rights reserved |
        This website is made with <span className="text-yellow-400">💛</span> by <span className="font-semibold">Fathima A</span></p>
        <p className='md:hidden block text-sm'>Copyright © 2025 All rights reserved |<span className="text-yellow-400">💛</span> <span className="font-semibold">Fathima A</span></p>
      </div>
    </>
  )
}

export default Footer