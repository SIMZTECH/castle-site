import React from 'react'

function HeaderComponent({title}) {
  return (
    <div className='text-[15px] font-poppins font-medium text-primaryColor'>
        {title}
    </div>
  )
}

export default HeaderComponent
