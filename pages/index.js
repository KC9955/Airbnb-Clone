import Head from 'next/head'
import Image from 'next/image'
import Banner from '../componets/Banner'
import Header from '../componets/Header'
import MediumCard from '../componets/MediumCard'
import SmallCard from '../componets/SmallCard'
import LargeCard from '../componets/LargeCard'
import Footer from '../componets/Footer'

export default function Home({exploreData,cardsData}) {
  return (
    <div className=''>
    <Head>
      <title>Airbnb</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
     <Header />
    
     <Banner />
   <main className='max-w-7xl mx-auto px-8 sm:px-16'>
    <section className='pt-6'>
    <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>
  
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {exploreData.map((item) => (
      <SmallCard  
      key={item.img}
      img={item.img}
      location={item.location}
      distance={item.distance}
      
      />
    ))}
   </div>
    </section>
   <section>
    <div>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
     <MediumCard />       
    </div>
    </section>
    <LargeCard />
    
   </main>
   <Footer />
    </div>
    
  )
}
export async function getStaticProps() 
{
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then ( 
    (res) => res.json()
    );
  const cardsData = await fetch ("https://www.jsonkeeper.com/b/VHHT").then ( 
    (res) => res.json()
    );
return {
  props: {
    exploreData,cardsData,
  },
}
}