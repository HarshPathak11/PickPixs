"use client"
import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Phone from './Phone'


const PHONES=[
    'testimonials/1.jpg',
    'testimonials/2.jpg',
    'testimonials/3.jpg',
    'testimonials/4.jpg',
    'testimonials/5.jpg',
    'testimonials/6.jpg',
]

function ReviewColumn({reviews,className,reviewClassName,msPerPixel}){
   const columnRef=useRef(null)
   const [columnHeight,setColumnHeight]=useState(0)
   const duration=`${columnHeight* msPerPixel}ms`

   useEffect(()=>{
    if(!columnRef.current) return
    const resizeObserver=new window.ResizeObserver(()=>{
        setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })
    resizeObserver.observe(columnRef.current)

    return ()=>{
        resizeObserver.disconnect()
    }
   })



   return(
   <div ref={columnRef}
   className={cn(' animate-marquee space-y-8 py-4',className)}
   style={{'--marquee-duration':duration}}>
   {reviews.concat(reviews).map((imgSrc,reviewIndex)=>(
    <Review key={reviewIndex} className={reviewClassName?.(reviewIndex%reviews.length)}
    imgsrc={imgSrc}
    />
   ))}
   </div>)
}

function Review({imgsrc,className,...props}){
    const POSSIBLE_DELAYS=[
        '0s','0.1s','0.2s','0.3s','0.4s','0.5s'
    ]

    const animationDelay=POSSIBLE_DELAYS[Math.floor(Math.random()*POSSIBLE_DELAYS.length)]


    return( 
    <div className={cn('animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',className)}
    style={{animationDelay}}
    {...props}>
    <Phone imgsrc={imgsrc}/>
    </div>)
}

function splitArray(array,numParts){
    const result=[]
    for (let i = 0; i < array.length; i++) {
        const element = i%numParts;
        if(!result[element])
            result[element]=[]
        result[element].push(array[i]) 
    }
    return result
}

function ReviewGrid() {
  const containerRef=useRef(null)
  const isInView =useInView(containerRef,{once:true,amount:0.4})

  const columns= splitArray(PHONES,3)
  const col1=columns[0]
  const col2=columns[1]
  const col3=splitArray(columns[2],2)

  return (
    <div ref={containerRef} className=' relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh]
    grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2
    lg:grid-cols-3'> 
    {isInView?
    <>
        <ReviewColumn reviews={[...col1,...col3.flat(),...col2]}
            reviewClassName={(reviewIndex)=>cn({
                "md:hidden":reviewIndex>=col1.length+col3[0].length,
                "lg:hidden":reviewIndex >=col1.length
            })}
            msPerPixel={10}
        />
        <ReviewColumn reviews={[...col2,...col3[1]]}
            className='hidden md:block'
            reviewClassName={(reviewIndex)=>
            reviewIndex>=col2.length?'lg:hidden':''}
            msPerPixel={15}
        />
        <ReviewColumn reviews={col3.flat()}
            className='hidden md:block'
            msPerPixel={10}
        />  
    </>:null}
    <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100'/>
    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100'/>
    </div>
  )
}

export default ReviewGrid
