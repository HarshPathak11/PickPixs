
import { notFound } from 'next/navigation'
import React from 'react'
import { connectToDatabase } from '@/lib/db';
import Imgconfig from '@/model/Imgconfig'
import DesignPreview from './DesignPreview';

async function page({searchParams}) {
 const { id } = await searchParams;
 if(!id){
    return notFound();
 }
 try{
    await connectToDatabase();
    const data=await Imgconfig.findOne({
        _id:id
    }).lean()
    if(!data)
        return notFound();
    // console.log(data)

    const {url,height, model,width,color,finish,material,texture,configuredUrl}=data
    // const obj=await data.json()
    return (
        <DesignPreview configuration={{url,height, width,color,finish,material,texture,configuredUrl,model}}/>
      )

 }
 catch(error){
    console.log(error)
    return notFound()
 }
 
}

export default page

