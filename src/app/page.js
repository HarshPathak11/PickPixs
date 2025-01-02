"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Home() {
  const [count,setCount]=React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 6 ? prevCount + 1 : 1));
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-slate-50">
    <section>
    <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
      <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="absolute w-28 left-0 -top-20 hidden lg:block">
          <img src="/snake-1.png" className="w-full"/>
        </div>
        <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-green-600 px-2 text-white rounded-sm">Custom</span> Phone Case</h1>
        <p className=" text-gray-500 mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">Capture <span className=" font-semibold ">a memorable snap</span> of your precious memories on your phone case. 
        CaseCobra allows you to protect your memories, not just your phone !</p>

        <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
          <div className="space-y-2">
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            High Quality, Durable material
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            5 year print guarantee
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            Modern Iphone models supported
          </li>
          <li className="flex gap-1.5 items-center text-left">
            <Check className="w-5 h-5 shrink-0 text-green-600 "/>
            Fine Quality in Affordable prices
          </li>
          </div>
        </ul>
        <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="flex -space-x-4">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-1.png'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-2.png'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-3.png'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-4.jpg'/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src='/users/user-5.jpg'/>
          </div>
        </div>
        <div className=" mt-2 flex flex-col justify-between items-center sm:items-start">
            <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            </div>   
          </div>
          <p className=" text-gray-600"><span className="font-semibold">1.25k</span> happy customers</p>
      </div>
    </div>
    <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
      <div className="relative md:max-w-xl">
        <img className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" src="/your-image.png"/>
        <img className="absolute w-20 -left-6 -bottom-6 select-none" src="/line.png"/>
        <Phone className='w-64' imgsrc={`/testimonials/${count}.jpg`}/>
      </div>
    </div>
    </MaxWidthWrapper>
   </section>
   <section className="bg-slate-100 py-24">
    <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
     <div className="flex flex-col lg:flex-col items-center gap-4 sm:gap-6">
     <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight
     font-bold text-5xl md:text-6xl text-gray-900">
      What our {' '} <span className="relative px-2 bg-green-600 text-white rounded-sm">customers</span>{' '}
      say
     </h2>
     <img src="/snake-2.png" className="w-24 order-0 lg:order-2"></img>
     </div>

     <div className=" font-sans mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
      <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
        </div>  
        <div className="text-lg leading-8">
          <p>"The case feels durable and I even got a compliment on the design. Had 
           the vase for two and a half months now and <span className="p-0.5 bg-slate-800 text-white">the image is super clear</span>
           , on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it</p>
        </div> 
        <div>
          <img className="rounded-full h-12 w-12 object-cover" src="/users/user-1.png"></img>
          <div className="flex flex-col">
            <p className="font-semibold">Jonathan</p>
            <div className="flex gap-1.5 items-center text-zinc-600">
              <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
              <p className="text-sm">Verfied Purchase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
            <Star className="h-4 w-4 text-[#e0ff33] fill-[#e0ff33]" ></Star>
        </div>  
        <div className="text-lg leading-8">
          <p>"I usually keep my phone together with my keys in my pocket and my previous cases were full of scratch marks, but <span className="p-0.5 bg-slate-800 text-white">this one seems quite sturdy</span>
           , with just a few barely noticeable srcrathc marks. It is so good even after half a year !</p>
        </div> 
        <div>
          <img className="rounded-full h-12 w-12 object-cover" src="/users/user-4.jpg"></img>
          <div className="flex flex-col">
            <p className="font-semibold">Josh Holmes</p>
            <div className="flex gap-1.5 items-center text-zinc-600">
              <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
              <p className="text-sm">Verfied Purchase</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </MaxWidthWrapper>
    <div className="pt-16">
      {/* animated section on the homepage */}
      <Reviews/>
    </div>
   </section>

    <section>
      <MaxWidthWrapper className='py-24'>
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center
            text-balance !leading-tight font-bold text-5xl
            md:text-6xl text-gray-900">
              Upload your photo and get{' '}
              <span className="relative px-2 bg-green-600 rounded-sm text-white">
                your own case
              </span>
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <img className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2
            rotate-90 md:rotate-0" src="/arrow.png"/>

            <div className="relative h-80 md:h-full w-full
            md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <img src='/horse.jpg' className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 
              h-full w-full "/>
            </div>

            <Phone className='w-60' imgsrc='/horse_phone.jpg'/>
        </div>
        </div>

        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit font-sans">
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            High-quality silicone material
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            Scratch and finger-print resistant coating
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            Wireless charging compatible
          </li>
          <li className="w-fit">
            <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
            5-year print warranty
          </li>
          <div className="flex justify-center">
            <Link href='/configure/upload' className="mx-auto mt-8">
              <Button  > Create your own Case <ArrowRight/></Button>
            </Link>
          </div>
         
        </ul>
      </MaxWidthWrapper>
    </section>
  
   </div>
  );
}
