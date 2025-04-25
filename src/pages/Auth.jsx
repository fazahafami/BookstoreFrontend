import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Auth({ register }) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <div id='loginPage' className='justify-center items-center flex flex-col' >
        <div className='md:grid grid-cols-3 justify-center items-center w-full'>
          <div></div>
          <div className='justify-center items-center flex flex-col  p-4'>
            <h1 className='text-3xl mb-4 font-bold text-white md:text-black'>BOOK STORE</h1>

            <form className='w-full bg-gray-900 p-10 flex justify-center items-center flex-col'>
              <div style={{ width: '70px', height: '70px', borderRadius: "50%" }} className='flex justify-center items-center flex-col border border-white'>
                <FontAwesomeIcon icon={faUser} className=' text-white fa-2xl' />

              </div>
              {register ? <h1 className='mt-5 text-center text-3xl text-white'>Register</h1> : <h1 className='mt-5 text-center text-3xl text-white'>Login</h1>}

              <div className="mb-5 mt-8 w-full">
                <input type="text" placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              {register && <div className="mb-5  w-full">
                <input type="text" placeholder='Username' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>}
              <div className="relative mb-2 w-full">
                <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              <div className="mb-5 w-full flex justify-between">
                <p className='text-amber-300' style={{ fontSize: '10px' }}>*Never share your password with others</p>
                {!register && <p className='text-white underline' style={{ fontSize: '10px' }}>Forget Password</p>}
              </div>
              {register ? <div className="mb-3 w-full">
                <button className='bg-green-800 w-full p-3 rounded text-white hover:bg-green-700 '>Register</button>
              </div> : <div className="mb-3 w-full">
                <button className='bg-green-800 w-full p-3 rounded text-white hover:bg-green-700 '>Login</button>
              </div>}


              {!register && <p className='text-white'>--------------- or ---------------</p>}
              {!register && <div className="mb-5 mt-3 w-full">
                <button className='bg-white w-full p-3 text-black rounded'>Sign in with Google</button>
              </div>}
              {register ? <p className='text-white'>Are you Already a User?<Link to={'/login'} className='text-blue-400 underline ms-2'>Login</Link></p> : <p className='text-white'>Are you a New User?<Link to={'/register'} className='text-blue-400 underline ms-2'>Register</Link></p>}

            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Auth