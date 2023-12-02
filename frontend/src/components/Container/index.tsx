import React from 'react'

export default function Container({children}: any) {
  return (
    <div className='max-w-[1300px] min-h-[100vh] lg:mx-auto px-3 md:px-6 py-10'>
      {children}
    </div>
  )
}
