
import React from 'react';
import { Skeleton } from '@mui/material';

function TopNavBarSkeleton() {
  return (
      <div className="w-full">
          <div className="flex items-center w-full p-3 sm:justify-between">
            {/* left */}
              <div className="relative flex items-center w-full gap-1">
                  {/* menu skel */}
                  <Skeleton
                      variant="triangular"

                      animation="wave"
                      width={30}
                      height={25}
                  />
                  <div className="text-[13px] flex-1 font-poppins flex items-center gap-1">
                      <Skeleton animation="wave" variant="triangular"  height={25} width="60px" />
                      <Skeleton
                          animation="wave"

                          variant="triangular"
                          width={30}
                          height={25}

                      />
                  </div>
              </div>
              {/* right */}
              <div className="flex items-center gap-3 font-poppins">
                  {/* menu skel */}
                  <Skeleton

                      variant="triangular"
                      animation="wave"
                      width={30}
                      height={25}
                  />
                  <Skeleton
                      variant="triangular"

                      animation="wave"
                      width={30}
                      height={25}
                  />
                   <Skeleton
                      variant="circular"

                      animation="wave"
                      width={20}
                      height={20}
                  />
              </div>
          </div>
          {/* bottom nav */}
          <div className="hidden mx-2 mb-3 sm:flex">
            <Skeleton
              variant="triangular"
              width={"100%"}
              height={"40px"}
              animation="wave"

            />

          </div>
      </div>
  );
}

export default TopNavBarSkeleton
