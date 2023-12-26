import Image from 'next/image'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Header4 from './components/Header4'


export default function Home() {


  return (
    <div className=''>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className=' my-14 max-w-7xl mx-auto'>
        <Image src={'/banner.avif'} draggable='false' alt='img' width={100} height={100} className='w-full' />
      </div>
      <div className='my-14 max-w-7xl mx-auto'>
        <Image src={'/banner1.avif'} alt='img' width={100} height={100} className='w-full' />
      </div>
      <Header4 />
    </div>
  )
}
