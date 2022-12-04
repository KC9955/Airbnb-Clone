import React from 'react'
import Image from 'next/image'
import records from '../componets/Records.json';

function MediumCard() {
  return (
    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {records.map((Records) =>{
          return(
            <div className='cursor-pointer transition transform duration-300 ease-out hover:scale-105'>
                <div className='relative h-80 w-80 '>
                <Image src={Records.img} 
                   layout="fill"
                   className='rounded-lg'
                   />
            </div>
            
            <div>
                <h1 className='text-lg mt-3 text-center font-semibold'>{Records.title}</h1>
            </div>
            </div>
           
          )
        }
        )}
    </div>
  )
}

export default MediumCard