import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {

  const [modalStatus, setmodalStatus] = useState(false)

  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center md:px-40 px-10'>
        <h1 className='text-3xl font-medium my-5'>Careers</h1>
        <p className='md:text-center text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae quos dolores sequi odit cumque facilis quod? Incidunt, pariatur laboriosam natus optio voluptas iste dolores, vel quos quae blanditiis cum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id saepe quasi omnis dicta quis temporibus inventore reiciendis velit possimus molestiae corporis deserunt nulla, porro obcaecati fugiat facilis? Modi, exercitationem error.</p>
      </div>

      <div className='md:p-20 p-6'>
        <h1 className='text-2xl'>Current Openings</h1>

        <div className="flex my-8 w-full justify-center items-center">
          <input
            type="text"
            placeholder="Job Title"
            className="md:w-1/4 w-1/2 px-3 py-2 placeholder-gray-400 border border-gray-400 shadow"
          />
          <button
            type="submit"
            className="bg-green-900 text-white px-3 py-2 shadow hover:bg-white hover:border hover:border-green-900 hover:text-green-900">
            Search
          </button>
        </div>


        <div className="md:px-20 py-5">
          <div className='shadow border border-gray-200 p-5'>
            <div className="md:grid grid-cols-[8fr_1fr]">
              <div>
                <h1 className='mb-3'>Job Title</h1>
                <hr />
                <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />kochi</p>
                <p className='mt-3'>Job Type :</p>
                <p className='mt-3'>Salary :</p>
                <p className='mt-3'>Qualification :</p>
                <p className='mt-3'>Experience :</p>
                <p className='mt-3 text-justify'>Description : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis temporibus nam natus dolorem possimus atque quasi totam odit qui magnam porro, unde libero tempore vel fuga maiores aut suscipit. Atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi tenetur repudiandae placeat voluptatum? Delectus quidem, modi quisquam, sapiente deleniti repellendus vitae, quae fuga quibusdam debitis ullam nam? Obcaecati, ullam?</p>
              </div>
              <div className='flex md:justify-center items-start justify-end'>
                <button
                  onClick={() => setmodalStatus(true)}
                  type="submit"
                  className="bg-blue-800 text-white px-3 py-2 mt-3 rounded shadow hover:bg-white hover:border hover:border-blue-800 hover:text-blue-800 md:ms-3 md:mt-0">
                  Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-1' />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />


      {/* modal */}
      {modalStatus && <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {/* title of the modal */}
              <div class="bg-gray-900 p-4 flex justify-between sm:px-6">
                <h1 className='text-white text-2xl'>Application Form</h1>
                <FontAwesomeIcon onClick={()=>setmodalStatus(false)} icon={faXmark} className='text-white fa-2x' />
              </div>

              {/* body of the modal */}
              <div class="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                <div className="grid grid-cols-2">

                  <div className='p-3'>
                    <div className="mb-3">
                      <input type="text" placeholder='Full Name' className='rounded p-2 w-full placeholder-gray-400 border border-gray-400 ' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Email Id' className='rounded p-2 w-full placeholder-gray-400 border border-gray-400 ' />
                    </div>
                  </div>

                  <div className='p-3'>
                    <div className="mb-3">
                      <input type="text" placeholder='Qualification' className='rounded p-2 w-full placeholder-gray-400 border border-gray-400 ' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Phone' className='rounded p-2 w-full placeholder-gray-400 border border-gray-400 ' />
                    </div>
                  </div>


                </div>

                <div className="mb-3 px-3 w-full">
                  <textarea placeholder='Cover Letter' className='w-full rounded p-2 placeholder-gray-400 border border-gray-400'></textarea>
                </div>

                <div className="mb-3 px-3 w-full">
                  <p className='text-gray-400'>Resume</p>
                  <input type='file' className='w-full rounded placeholder-gray-400 border border-gray-400 file:bg-gray-400 file:p-2 file:text-white'></input>
                </div>

              </div>

              {/* footer of the modal */}
              <div class="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs  hover:border hover:border-green-600  hover:text-green-600  hover:bg-white sm:ml-3 sm:w-auto">Submit</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:border hover:border-orange-600  hover:text-orange-600  hover:bg-white sm:mt-0 sm:w-auto">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>

  )
}

export default Careers