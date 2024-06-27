import CastleBetFooter from '@/Components/CastleBetFooter'
import React from 'react'

function ScreenContentLayout({children}) {
  return (
    <div className='flex flex-col w-full h-full bg-white'>
        <main className='flex-1 w-full '>
            {children}
        </main>
        {/* <CastleBetFooter /> */}
    </div>
  )
}

export default ScreenContentLayout
