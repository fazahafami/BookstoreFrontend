import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'

function Profile() {
    const [sellStatus, setsellStatus] = useState(true)
    const [bookStatus, setbookStatus] = useState(false)
    const [purchaseStatus, setpurchaseStatus] = useState(false)
    return (
        <>
            <Header />
            <div className='bg-gray-900' style={{ height: '200px', width: '100%' }}></div>
            <div style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user icon" style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
            </div>
            <div className="md:flex justify-between px-20 mt-5 ">
                <p className='flex justify-center items-center'>
                    <span className='md:text-3xl text-2xl'>Fathima Sanjeer</span>
                    <FontAwesomeIcon icon={faCircleCheck} className='ms-2 text-blue-400' />
                </p>
                <EditProfile />
            </div>
            <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque qui ducimus ad vero nobis odit reprehenderit perspiciatis praesentium totam voluptate, autem aut magnam eius reiciendis omnis necessitatibus voluptatibus possimus aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus hic nisi labore qui aut quas optio, voluptatum repellat at eligendi esse mollitia inventore doloribus quod dicta molestiae, eius tempora eum?</p>

            <div className='md:px-40 p-5'>
                {/* tabs */}
                <div className=' flex justify-center items-center my-5'>
                    <p className={sellStatus ? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 cursor-pointer rounded' :
                        'p-4 text-black border-b border-gray-200 cursor-pointer'}
                        onClick={() => { setsellStatus(true); setbookStatus(false); setpurchaseStatus(false) }}>
                        Sell Book
                    </p>

                    <p className={bookStatus ? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 cursor-pointer rounded' :
                        'p-4 text-black border-b border-gray-200 cursor-pointer'}
                        onClick={() => { setsellStatus(false); setbookStatus(true); setpurchaseStatus(false) }}>
                        Book Status
                    </p>

                    <p className={purchaseStatus ? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 cursor-pointer rounded' :
                        'p-4 text-black border-b border-gray-200 cursor-pointer'}
                        onClick={() => { setsellStatus(false); setbookStatus(false); setpurchaseStatus(true) }}>
                        Purchase History
                    </p>
                </div>

                {/* content of tabs */}

                {sellStatus &&
                    <div className='bg-gray-200 p-10 mt-20 rounded'>
                        <h1 className='my-4 font-mediun text-center text-3xl'> Book Details</h1>
                        <div className="md:grid grid-cols-2 w-full mt-10">

                            <div className='px-3'>
                                <div className="mb-3">
                                    <input type="text" placeholder='Title' className='rounded p-2 w-full placeholder-gray-400  bg-white' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Author' className='rounded p-2 w-full placeholder-gray-400 bg-white ' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='No of Pages' className='rounded p-2 w-full placeholder-gray-400  bg-white' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Image Url' className='rounded p-2 w-full placeholder-gray-400 bg-white ' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Price' className='rounded p-2 w-full placeholder-gray-400  bg-white' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Discount Price' className='rounded p-2 w-full placeholder-gray-400  bg-white ' />
                                </div>
                                <div className="mb-3">
                                    <textarea rows={5} placeholder='Abtract' className='w-full rounded p-2 placeholder-gray-400  bg-white'></textarea>
                                </div>
                            </div>

                            <div className='px-3'>
                                <div className="mb-3">
                                    <input type="text" placeholder='Publisher' className='rounded p-2 w-full placeholder-gray-400  bg-white ' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Language' className='rounded p-2 w-full placeholder-gray-400  bg-white' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='ISBN' className='rounded p-2 w-full placeholder-gray-400  bg-white' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Category' className='rounded p-2 w-full placeholder-gray-400  bg-white ' />
                                </div>
                                {/* upload pic */}
                                <div className="my-4 flex w-full justify-center items-center">
                                    <label htmlFor="imagefile">
                                        <input type="file" id='imagefile' style={{ display: 'none' }} />
                                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no image" style={{ width: '200px', height: "200px" }} />
                                    </label>


                                </div>
                                <div className="flex justify-center items-center my-3">
                                    <img src="https://5.imimg.com/data5/IU/SQ/GD/SELLER-43618059/book-cover-page-design.jpg" alt="no image" style={{ width: '70px', height: "70px" }} />
                                    <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500' />
                                </div>


                            </div>


                        </div>

                        <div className='w-full mt-5 flex justify-end'>

                            <button type="button" className="mb-2 justify-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-xs  hover:border hover:border-amber-600  hover:text-amber-600  hover:bg-white ">Reset</button>
                            <button type="button" className=" mb-2 justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs  hover:border hover:border-green-600  hover:text-green-600  hover:bg-white ms-4 ">Submit</button>
                        </div>

                    </div>}

                {bookStatus &&
                    <div className='md:p-10 p-5 mt-20 shadow rounded'>

                        {/* if there is content */}
                        <div className='p-5 bg-gray-200 rounded '>
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div className='md:px-4'>
                                    <h1 className='text-2xl mt-3'>Title</h1>
                                    <h2 className='mt-3'>Author</h2>
                                    <h3 className='text-blue-600 mt-3'>$ price</h3>
                                    <p className='text-justify mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ullam delectus, rerum, laboriosam ea tenetur natus cumque molestiae repellendus illo ut. Commodi voluptatibus cumque veniam? Ex fugiat voluptates dolores blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti illum, enim blanditiis, voluptates laudantium neque accusantium iure laborum distinctio aliquid necessitatibus saepe doloribus quasi magnam sint excepturi exercitationem optio ad!</p>

                                    <div className='flex mt-4'>
                                        <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending image" style={{ height: '76px', width: '90px' }} />

                                        <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="approved image" style={{ height: '70px', width: '70px' }} />

                                        <img src="https://cdn-icons-png.freepik.com/512/6188/6188726.png" alt="sold image" style={{ height: '70px', width: '70px' }} />


                                    </div>
                                </div>
                                <div className='px-4 mt-4'>
                                    <img src="https://marketplace.canva.com/EAFf0E5urqk/1/0/1003w/canva-blue-and-green-surreal-fiction-book-cover-53S3IzrNxvY.jpg" alt="Book Image" style={{ height: '300px' }} className='w-full' />
                                    <div className='my-4 flex justify-end'>
                                        <button className='p-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-200 shadow-xs  hover:border hover:border-red-600  hover:text-red-600  hover:bg-gray-200'>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* if no content */}
                        <div className="flex justify-center items-center flex-col">
                            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="book image" style={{ height: '300px', width: '200px' }} />
                            <p className='text-red-400 text-2xl'>No Book Added Yet</p>
                        </div>
                    </div>}

                {purchaseStatus &&
                    <div className='md:p-10 p-5 mt-20 shadow rounded'>
                        {/* if there is content */}
                        <div className='p-5 bg-gray-200 rounded '>
                            <div className="md:grid grid-cols-[3fr_1fr]">
                                <div className='md:px-4'>
                                    <h1 className='text-2xl mt-3'>Title</h1>
                                    <h2 className='mt-3'>Author</h2>
                                    <h3 className='text-blue-600 mt-3'>$ price</h3>
                                    <p className='text-justify mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ullam delectus, rerum, laboriosam ea tenetur natus cumque molestiae repellendus illo ut. Commodi voluptatibus cumque veniam? Ex fugiat voluptates dolores blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti illum, enim blanditiis, voluptates laudantium neque accusantium iure laborum distinctio aliquid necessitatibus saepe doloribus quasi magnam sint excepturi exercitationem optio ad!</p>

                                    <div className='flex mt-4'>
                                        <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending image" style={{ height: '76px', width: '90px' }} />

                                        <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="approved image" style={{ height: '70px', width: '70px' }} />

                                        <img src="https://cdn-icons-png.freepik.com/512/6188/6188726.png" alt="sold image" style={{ height: '70px', width: '70px' }} />


                                    </div>
                                </div>
                                <div className='px-4 mt-4'>
                                    <img src="https://marketplace.canva.com/EAFf0E5urqk/1/0/1003w/canva-blue-and-green-surreal-fiction-book-cover-53S3IzrNxvY.jpg" alt="Book Image" style={{ height: '300px' }} className='w-full' />
                                    <div className='my-4 flex justify-end'>
                                        <button className='p-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-200 shadow-xs  hover:border hover:border-red-600  hover:text-red-600  hover:bg-gray-200'>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* if no content */}
                        <div className="flex justify-center items-center flex-col">
                            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="book image" style={{ height: '300px', width: '200px' }} />
                            <p className='text-red-400 text-2xl'>No Book Purchased Yet</p>
                        </div>

                    </div>}

            </div>


            <Footer />
        </>
    )
}

export default Profile