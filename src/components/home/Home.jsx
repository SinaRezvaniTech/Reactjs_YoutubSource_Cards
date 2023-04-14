import React from 'react'
//components
import Card from './Card'

//images
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'

const Home = () => {
  const images = [img1, img2, img3]
  return (
    <div className='w-screen h-screen bg-slate-300 flex'>
      <div className='container m-auto '>
        <div className='grid grid-cols-12 gap-5'>
          {/* Cards */}
          {images.map((i) => (
            <Card img={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
