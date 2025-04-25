import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'

function Profile() {
    return (
        <>
            <Header />
            <div className='bg-gray-900' style={{ height: '200px', width: '100%' }}></div>
            <div style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user icon" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
            </div>
            <div className="flex justify-between px-20 mt-5 ">
                <p className='flex justify-center items-center'>
                    <span className='text-3xl'>Fathima Sanjeer</span>
                    <FontAwesomeIcon icon={faCircleCheck} className='ms-2 text-blue-400' />
                </p>
                <EditProfile/>
            </div>
            <Footer />
        </>
    )
}

export default Profile