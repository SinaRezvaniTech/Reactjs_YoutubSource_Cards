import React, { useState } from 'react'

const Card = ({ img }) => {
  const [hover, setHover] = useState(false)
  const hoverToggle = () => {
    setHover(!hover)
  }
  return (
    <div className='col-span-4'>
      <div
        onMouseEnter={hoverToggle}
        onMouseLeave={hoverToggle}
        className='relative border-4 shadow-md rounded-2xl overflow-hidden'
      >
        <img
          className={`rounded-2xl object-cover ${
            hover && 'scale-150 blur-sm '
          } w-[35rem] h-[40rem]  ease-in-out duration-500 cursor-pointer`}
          src={img}
          alt='img'
        />

        <div
          className={`${
            hover ? 'bottom-0' : '-bottom-52'
          } absolute  left-0 text-white p-5 text-lg ease-in-out duration-500 flex flex-col justify-center items-center`}
        >
          <p
            className={`${
              hover && 'rounded-lg'
            } my-10 px-12 py-4 bg-red-600 ease-in-out duration-500 cursor-pointer relative`}
          >
            Click here
            <a
              className='absolute top-0 right-0 w-full h-full'
              href='https://example.com'
            ></a>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            excepturi dolor? Blanditiis consequuntur impedit consequatur
            nesciunt est sed, quod dignissimos sequi molestias numquam delectus
            praesentium illo esse deserunt. Voluptatum, illum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
