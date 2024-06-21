import React from 'react'
import HeaderComponent from './HeaderComponent'

function FavouritesList({favouritesData=[]}) {
  return (
      <div>
          <HeaderComponent title={"Favourites"} />
          {favouritesData.length > 0 && (
              <div >
                  am the data
              </div>
          )}

          {favouritesData.length<1 && (
              <div className='flex items-center justify-center py-5 '>
                <p className='font-poppins text-[11px] w-full text-center shadow-sm py-2 text-mediumBlackcolor'>No Favourite Selected</p>

              </div>
          )}
      </div>
  )
}

export default FavouritesList;
