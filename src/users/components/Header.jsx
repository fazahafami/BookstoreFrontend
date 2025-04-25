import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser, faAddressCard, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
  const [status, setStatus] = useState(false)
  const [dropdownStatus, setdropdownStatus] = useState(false)

  return (
    <>
      <div className='md:grid grid-cols-3 p-3'>
        <div className='flex items-center'>
          <img src="https://openclipart.org/download/275692/1489798288.svg" alt="Logo" style={{ width: '50px', height: '50px' }} />
          <h1 className='md:hidden text-2xl ms-2'>BOOKSTORE</h1>
        </div>
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl'>BOOK STORE</h1>
        </div>
        <div className='md:flex justify-end items-center hidden'>
          <FontAwesomeIcon icon={faInstagram} className='me-3' />
          <FontAwesomeIcon icon={faXTwitter} className='me-3' />
          <FontAwesomeIcon icon={faFacebook} className='me-3' />
          {/* <Link to={'/login'}><button className='border border-black rounded px-3 py-2 ms-3'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link> */}



          {/* dropdown */}
          <div className="relative inline-block text-left">
            <div>
              <button type="button" onClick={() => setdropdownStatus(!dropdownStatus)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user icon" style={{ width: "40px", height: '40px' }} className='mx-2' />
              </button>
            </div>
            {dropdownStatus &&
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <Link to={'/profile'}><p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem" tabIndex="-1" id="menu-item-0"><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</p></Link>
                  <button className=" w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem" tabIndex="-1" id="menu-item-1"><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                </div>
              </div>}
          </div>


        </div>

      </div>

      <nav className='p-3 w-full bg-gray-900 text-white md:flex justify-center items-center'>
        <div className='flex justify-between items-center px-3 md:hidden'>
          <span onClick={() => setStatus(!status)} className='text-2xl'>
            <FontAwesomeIcon icon={faBars} className='' />
          </span>
          {/* <Link to={'/login'}><button className='border border-white rounded px-3 py-2 ms-3'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link> */}
          {/* Dropdown for small screens */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => setdropdownStatus(!dropdownStatus)}
              className="inline-flex justify-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user icon"
                style={{ width: "40px", height: "40px" }}
                className="mx-2"
              />
            </button>
            {dropdownStatus && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1" role="none">
                  <Link to={"/profile"}>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <FontAwesomeIcon icon={faAddressCard} className="me-2" />
                      Profile
                    </p>
                  </Link>
                  <button className="w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FontAwesomeIcon icon={faPowerOff} className="me-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>


        </div>
        <ul className={status ? 'md:flex' : 'md:flex justify-center hidden'}>
          <Link to={'/'}><li className='mx-4 mt-3 md:mt-0'>Home</li></Link>
          <Link to={'/all-Books'}><li className='mx-4 mt-3 md:mt-0'>Books</li></Link>
          <Link to={'/careers'}><li className='mx-4 mt-3 md:mt-0'>Careers</li></Link>
          <Link to={'/contact'}><li className='mx-4 mt-3 md:mt-0'>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header
