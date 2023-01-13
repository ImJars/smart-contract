import React from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
      <div
        className='w-full h-screen relative'
      >
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        <div
          className='w-auto absolute top-1/4 transform translate-x-1/4 translate-y-full 
                    justify-start'
        >
          <h1 className='text-base text-white '>
            Hi everyone!
          </h1>
          <h2 className='text-6xl text-white font-bold'>
            I'm Angel Ramirez
          </h2>
          <h3 className='text-4xl text-secondary'>
            I build things for the web.
          </h3>
          <h4 className='text-sm text-white w-2/3'>
            I'm a software developer specializing in creating exceptional 
            products and digital experiences. I am currently focused on 
            creating <font className='text-secondary'>Web3</font> technology products.
          </h4>
        </div>
      </div>
    </>
  )
}

export default App
