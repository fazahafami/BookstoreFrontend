import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function AllBooks() {
    const [status, setStatus] = useState(false)
    return (
        <>
            <Header />

            {/* when user is logged in  */}
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-medium mt-5'>Collections</h1>
                    <div className="flex my-8 w-full justify-center items-center">
                        <input
                            type="text"
                            placeholder="Search by title"
                            className="md:w-1/4 w-1/2 px-3 py-2 placeholder-gray-500 border border-gray-500 shadow"
                        />
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-3 py-2 shadow hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900">
                            Search
                        </button>
                    </div>

                </div>

                <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5 md:pt-10">
                    <div>
                        <h1 className='text-2xl font-medium mt-3'>Filters <span onClick={() => setStatus(!status)} className='md:hidden'><FontAwesomeIcon icon={faCaretDown} /></span></h1>


                        <div className={status ? 'md:block mt-3' : 'md:block mt-3 hidden'}>
                            <div className='mt-3'>
                                <input type="radio" id='Literary' name='filter' />
                                <label htmlFor="Literary" className='ms-3'>Literary Fiction</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Philosophy' name='filter' />
                                <label htmlFor="Philosophy" className='ms-3'>Philosophy</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Romance' name='filter' />
                                <label htmlFor="Romance" className='ms-3'>Romance</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Mystery/Thriller' name='filter' />
                                <label htmlFor="Mystery/Thriller" className='ms-3'>Mystery/Thriller</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Horror' name='filter' />
                                <label htmlFor="Horror" className='ms-3'>Horror</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Auto/Biography' name='filter' />
                                <label htmlFor="Auto/Biography" className='ms-3'>Auto/Biography</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Self-Help' name='filter' />
                                <label htmlFor="Self-Help" className='ms-3'>Self-Help</label>
                            </div>
                            <div className='mt-3'>
                                <input type="radio" id='Politics' name='filter' />
                                <label htmlFor="Politics" className='ms-3'>Politics</label>
                            </div>
                        </div>
                    </div>


                    <div className='md:grid grid-cols-4 w-full'>

                        <div className="p-4">
                            <div className='p-3 shadow-md'>
                                <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
                                <div className='flex flex-col justify-center items-center mt-3'>
                                    <p className='text-blue-800'>dan Brown</p>
                                    <h3>The Da Vinci Code</h3>
                                    <button className='mt-3 w-full px-3 py-2 bg-blue-900 text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900'>Buy $19</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='p-3 shadow-md'>
                                <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
                                <div className='flex flex-col justify-center items-center mt-3'>
                                    <p className='text-blue-800'>dan Brown</p>
                                    <h3>The Da Vinci Code</h3>
                                    <button className='mt-3 w-full px-3 py-2 bg-blue-900 text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900'>Buy $19</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='p-3 shadow-md'>
                                <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
                                <div className='flex flex-col justify-center items-center mt-3'>
                                    <p className='text-blue-800'>dan Brown</p>
                                    <h3>The Da Vinci Code</h3>
                                    <button className='mt-3 w-full px-3 py-2 bg-blue-900 text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900'>Buy $19</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='p-3 shadow-md'>
                                <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
                                <div className='flex flex-col justify-center items-center mt-3'>
                                    <p className='text-blue-800'>dan Brown</p>
                                    <h3>The Da Vinci Code</h3>
                                    <button className='mt-3 w-full px-3 py-2 bg-blue-900 text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900'>Buy $19</button>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

            {/* not logged in */}

            <div className="md:grid grid-cols-3">
                <div></div>
                <div className='flex justify-center items-center flex-col w-full py-10'>
                    <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="no image" className='w-1/2' />
                    <p className='mt-3 text-2xl'>Please <Link to={'/login'} className='text-red-500 underline'>Login</Link> To Explore More</p>
                </div>
                <div></div>
            </div>


            <Footer />
        </>
    )
}

export default AllBooks