import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <header className='flex justify-center items-center p'>
        <div id='main' className='flex justify-center items-center'>
          <div className="md:grid grid-cols-3 w-full">
            <div></div>
            <div className='text-white flex justify-center items-center flex-col px-5 text-center'>
              <h1 className='text-5xl'>Wonderful Gifts</h1>
              <p className='mt-2'>Give your family and friends a book</p>
              <div className='flex mt-10 w-full'>
                <input className='py-2 px-4 bg-white rounded-3xl placeholder-gray-500 w-full focus:outline-none' type="text" placeholder='Search Books' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-800' style={{ marginTop: "11px", marginLeft: "-30px" }} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>

      {/* new arrivals section */}
      <section className='flex flex-col justify-center items-center py-10 md:px-40 px-5 '>
        <h2>NEW ARRIVALS</h2>
        <h4 className='text-2xl'>Explore Our Latest Collections</h4>

        <div className='md:grid grid-cols-4 w-full mt-5'>

          <div className="p-4">
            <div className='p-3 shadow-md'>
              <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
              <div className='flex flex-col justify-center items-center mt-3'>
                <p className='text-blue-800'>dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p>$19</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className='p-3 shadow-md'>
              <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
              <div className='flex flex-col justify-center items-center mt-3'>
                <p className='text-blue-800'>dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p>$19</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className='p-3 shadow-md'>
              <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
              <div className='flex flex-col justify-center items-center mt-3'>
                <p className='text-blue-800'>dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p>$19</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className='p-3 shadow-md'>
              <img src="https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg" alt="no image" style={{ width: '100%', height: '300px' }} />
              <div className='flex flex-col justify-center items-center mt-3'>
                <p className='text-blue-800'>dan Brown</p>
                <h3>The Da Vinci Code</h3>
                <p>$19</p>
              </div>
            </div>
          </div>



        </div>

        <div className="flex justify-center items-center my-5">
         <Link to={'/all-Books'}> <button className='px-3 py-2 bg-blue-900 text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900'>Explore More</button></Link>
        </div>
      </section>

      {/* author */}
      <section className='flex flex-col justify-center items-center py-10 md:px-40 px-6'>

        <div className="md:grid grid-cols-2 w-full">
          <div>
            <div className='flex justify-center items-center flex-col'>
              <h2>FEATURED AUTHORS</h2>
              <h3 className='text-2xl'>Captivates with every word</h3>
            </div>
            <div>
              <p className='mt-6 text-justify'>Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.</p>
              <p className='mt-5 text-justify'>Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.</p>
            </div>
          </div>
          <div className='px-10 pt-8 '>
            <img src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg" alt="no image" className='w-full' />
          </div>
        </div>
      </section>

      {/* testimonial */}
      <div className=' flex flex-col py-10 md:px-40 px-6 justify-center items-center text-center'>
        <h2>TESTIMONIALS</h2>
        <h3 className='text-2xl'>See What Others Are Saying</h3>
        <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="no image" style={{width:'150px',height:'150px',borderRadius:'50%'}} className='mt-6'/>
        <h6 className='mt-3'>Treesa Joseph</h6>
        <p className='text-justify mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae praesentium deleniti minima quaerat, rerum nostrum omnis debitis odio saepe id. Suscipit nemo possimus exercitationem animi numquam. Ipsam odio dolore eligendi! Nobis similique esse ipsa facilis ipsam error explicabo nulla porro, iusto eius obcaecati, sunt veritatis laborum dolorum omnis delectus blanditiis, nemo dolorem repellat assumenda. Recusandae, architecto. Repellendus libero cupiditate totam.</p>
      </div>

      <Footer />
    </>
  )
}

export default Home




