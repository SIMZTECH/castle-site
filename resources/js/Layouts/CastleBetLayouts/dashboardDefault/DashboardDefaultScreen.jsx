
import React from 'react'
import LiveGamesDashboardDefault from './LiveGamesDashboardDefault'
import HighlightsDashboardDefault from './HighlightsDashboardDefault'
import PopularDashboardDefault from './PopularDashboardDefault'

function DashboardDefaultScreen() {
    
  return (
    <div className='flex flex-col gap-2'>
        {/* popular games */}
        <HighlightsDashboardDefault />

        {/* live games */}
        <LiveGamesDashboardDefault />

        {/* popular */}
        <PopularDashboardDefault />
    </div>
  )
}

export default DashboardDefaultScreen
