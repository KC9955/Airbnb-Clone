import React from 'react'
import Image from 'next/image'
import Card from '../componets/card.json';

function LargeCard() 
{return (
    <section >
         {Card.map((card) =>{
          return(
            <div className='relative py-16 cursor-pointer'>
                 <div className='relative h-96 min-w-[300px] '>
                <Image src={card.image} 
                   layout="fill"
                   objectFit='cover'
                   className='rounded-2xl'
                   />
            </div>
            <div className='absolute top-32 left-32'>
                <h3 className='text-4xl mb-3 w-64'>{card.title}</h3>
                <p>{card.desciption}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{card.buttonText}</button>
            </div>
            </div>
         )
          }
         )
        }
        
    </section>
  )
}


export default LargeCard