import React from 'react'
import Image from 'next/legacy/image';
import {GlobeAltIcon} from '@heroicons/react/24/outline';
import {MagnifyingGlassIcon,UserCircleIcon,Bars3Icon} from '@heroicons/react/24/solid';
function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10' > 
        <div className="flex relative items-center h-10 cursor-pointer my-auto">
            <Image 
            src="https://links.papareact.com/qd3" 
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            />
        </div>
        {/* middle */}
        <div className='flex items-center py-2 rounded-full md:border-2 md:shadow-sm'>
          <input type="text" placeholder='Search Here' className='pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400' />
          <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-500  text-white rounded-full p-2 cursor-pointer  md:mx-2' />
        </div>
        {/* right */}
        <div className='flex items-center justify-end font-medium py-2 space-x-4'>
          <p className='hidden md:inline-flex cursor-pointer hover:bg-gray-100 hover:p-2 hover:rounded-full '>Airbnb your home</p>
          <GlobeAltIcon className='h-6 cursor-pointer' />
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full  hover:shadow-md'>
          <Bars3Icon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer'/>
          </div>
        </div>

    </header>
  )
}

export default Header