import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 cursor-pointer'>
        <div className='space-y-4 text-gray-800 text-sm'>
            <h2 className='font-bold'>ABOUT</h2>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
        </div>
        <div className='space-y-4 text-gray-800 text-sm'>
            <h2 className='font-bold'>COMMUNITY</h2>
            <p>Blog</p> 
            <p>Careers</p>
            <p>Partnerships</p>
        </div>
        <div className='space-y-4 text-gray-800 text-sm'>
               <h2 className='font-bold'>Social</h2>
               <p>Twitter</p>
               <p>Facebook</p>
               <p>LinkedIn</p>
        </div>
        <div className='space-y-4 text-gray-800 text-sm'>
            <h2 className='font-bold'>SUPPORT</h2>
            <p>Help center</p>  
            <p>Community</p>
            <p>GitHub</p>
        </div>
    </div>
  )
}

export default Footer