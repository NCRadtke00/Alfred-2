import React from 'react'
import { BoltIcon, BookOpenIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
function HomePage() {
  return (
    <div className=' flex flex-col items-center justify-center text-white h-screen px-2'>
        <h1 className='text-6xl font-bold mb-6'>Hello, I'm <i>Alfred</i></h1>
        <h2 className='text-4xl font-bold mb-20'>What can I help you?</h2>
        
        <div className='flex space-x-4 text-center'>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <BoltIcon className='h-8 w-8'/>
                    <h2>mb1</h2>
                </div>
                <div className='space-y-4'>
                    <p className='informationText'>explain something</p>
                    <p className='informationText'>explain something else</p>
                    <p className='informationText'>explain something new</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <BookOpenIcon className='h-8 w-8'/>
                    <h2>mb2</h2>
                </div>
                <div className='space-y-4'>
                    <p className='informationText'>explain something</p>
                    <p className='informationText'>explain something else</p>
                    <p className='informationText'>explain something new</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <ComputerDesktopIcon className='h-8 w-8'/>
                    <h2>mb3</h2>
                </div>
                <div className='space-y-4'>
                    <p className='informationText'>explain something</p>
                    <p className='informationText'>explain something else</p>
                    <p className='informationText'>explain something new</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage