import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'


function Navbar() {
    const user=undefined
    const isAdmin=undefined
  return (
    <nav className='fixed z-[100] h-14 w-full inset-x-0 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
    <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link href="/" className='flex z-40 font-bold font-sans text-xl'>Pick<span className='text-green-600'>Pixs</span></Link>
            <div className='flex flex-row gap-5 items-center font-sans'>
                {isAdmin?
                <Button>DashBoard</Button>:
                null
                }
                <SignedIn>
                <Link href='/'><Button variant="ghost">Create Case <ArrowRight className='ml-1.5'/></Button></Link>
                <SignOutButton><Button>Logout</Button></SignOutButton>
                </SignedIn>
                <SignedOut>
                <Link href='/signIn'><Button>Login</Button></Link>
                <Link href='/signUp'><Button>Register</Button></Link>
                </SignedOut>
            </div>
        </div>
    </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
