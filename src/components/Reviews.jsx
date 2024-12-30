import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ReviewGrid from './ReviewGrid'

function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
    <img aria-hidden="true" 
    src='/what-people-are-buying.png'
    className=' absolute select-none hidden xl:block -left-32 top-1/3'
    />
    <ReviewGrid/>
    </MaxWidthWrapper>
  )
}

export default Reviews
