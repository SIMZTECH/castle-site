import { Skeleton } from '@mui/material';
import React from 'react';

function AsideNavLeftSkeleton() {
  return (
    <div className="relative flex flex-col overflow-y-hidden">
        <Skeleton variant='triangular' animation={'wave'} height={40} />
    </div>
  )
}

export default AsideNavLeftSkeleton;
