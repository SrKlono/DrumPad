import React from 'react'

const App = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div id='drum-machine' className='min-w-md flex flex-wrap rounded-lg border g-border'> 
        <div className='grid grid-cols-3 grid-rows-3'>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
          <button className='bg-amber-700 p-4'>Q</button>
        </div>
      </div>
    </div>
  )
}

export default App