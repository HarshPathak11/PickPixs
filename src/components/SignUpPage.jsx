import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div>
       <div className='flex flex-row justify-around items-center w-full h-[100vh] bg-slate-800 pt-12'>
            <div className='flex justify-center'>
            <img data-v-83bd8314="" src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" width="600" />
            </div>
            <div className='flex justify-start items-center'><SignUp/></div>
        </div>
    </div>
  )
}

export default SignUpPage
