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
          className='absolute top-1/2 left-1/4 flex flex-col justify-start'
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
        </div>
      </div>
    </>
  )
}

export default App
