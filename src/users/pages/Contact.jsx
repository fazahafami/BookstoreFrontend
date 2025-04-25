import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpenText, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center md:px-40 px-10'>
        <h1 className='text-3xl font-medium my-5'>Contacts</h1>
        <p className='md:text-center text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae quos dolores sequi odit cumque facilis quod? Incidunt, pariatur laboriosam natus optio voluptas iste dolores, vel quos quae blanditiis cum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id saepe quasi omnis dicta quis temporibus inventore reiciendis velit possimus molestiae corporis deserunt nulla, porro obcaecati fugiat facilis? Modi, exercitationem error.</p>
      </div>

      <div className="md:grid grid-cols-3 md:px-40 md:py-10 p-5 w-full">
        <div className='flex p-4 md:justify-start items-center'>
          <div style={{ height: '50px', width: '50px', borderRadius: '50%' }} className='bg-gray-400 text-center me-3 p-3'><FontAwesomeIcon icon={faLocationDot} className='text-2xl' /></div>
          <div className='flex w-1/2'><p className="">123 Main Street, Apt 4B, Anytown, CA 91234</p></div>
        </div>
        <div className='flex p-4 md:justify-center items-center'>
          <div style={{ height: '50px', width: '50px', borderRadius: '50%' }} className='bg-gray-400 text-center me-3 p-3'><FontAwesomeIcon icon={faPhone} className='text-2xl' /></div>
          <div className='flex'><p className="">+91 93xxxxx697</p></div>
        </div>
        <div className='flex p-4 md:justify-end items-center'>
          <div style={{ height: '50px', width: '50px', borderRadius: '50%' }} className='bg-gray-400 text-center me-3 p-3'><FontAwesomeIcon icon={faEnvelopeOpenText} className='text-2xl' /></div>
          <div className='flex'><p className="">Bookstore@gmail.com</p></div>
        </div>
      </div>

      <div className='md:grid grid-cols-2 md:px-40 md:py-5 p-5 w-full'>
        <div className='w-full p-5'>
          <form className='w-full bg-gray-400 p-7 flex justify-center items-center flex-col'>
            <h1 className='mb-5 font-bold p-4'>Send me Message</h1>
            <div className='mb-3 w-full'>
              <input type="text" placeholder='Name' className='bg-white placeholder-gray-400 rounded w-full p-2' />
            </div>
            <div className='mb-3 w-full'>
              <input type="text" placeholder='Email Id' className='bg-white placeholder-gray-400 rounded w-full p-2' />
            </div>
            <div className="mb-3 w-full">
              <textarea placeholder='Message' className='w-full rounded p-2 placeholder-gray-400 bg-white h-30'></textarea>
            </div>
            <div className="mb-3 w-full">
              <button className='w-full p-2 bg-gray-900 rounded text-white'>Send<FontAwesomeIcon icon={faPaperPlane} className='ms-2' /></button>
            </div>

          </form>
        </div>

        <div className='w-full p-5'>
          {/* map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019726291676!2d-122.4206796846815!3d37.7785191797588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2e2e1b9a1d%3A0x58a2b01403f7bb8!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1681244780196!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact