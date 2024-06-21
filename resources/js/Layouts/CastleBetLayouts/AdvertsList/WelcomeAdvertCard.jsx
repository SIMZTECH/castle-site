import React from 'react';

function WelcomeAdvertCard({banner,path}) {
  return (
    <div
      className='cursor-pointer b'
      onClick={()=>''}
    >
        <figure>
            <img 
                className="rounded-md"
                // className='rounded-md'
                src={banner} 
                alt='advert'/>
        </figure>
    </div>
  )
}

export default WelcomeAdvertCard