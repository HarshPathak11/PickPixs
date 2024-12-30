import { cn } from '@/lib/utils'
import React from 'react'
import {HTMLAttributes} from 'react'


function Phone({imgsrc,dark=false,className}) {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden',className)}>
     {/* {...props} */}
     <img src={dark?'/phone-template-dark-edges.png':'/phone-template-white-edges.png'}
        className='pointer-events-none z-50 select-none'
     />
     <div className='absolute -z-10 inset-0'>
        <img src={imgsrc} className='object-cover'>    
        </img>
     </div>
    </div>
  )  
}

export default Phone
