
import { notFound } from 'next/navigation'
import React from 'react'
import DesignConfigurator from './DesignConfigurator';
import { connectToDatabase } from '@/lib/db';
import Imgconfig from '@/model/Imgconfig'

async function page({searchParams}) {
 const { id } = await searchParams;
 if(!id){
    return notFound();
 }
 try{
    await connectToDatabase();
    const data=await Imgconfig.findOne({
        _id:id
    })
    if(!data)
        return notFound();

    const {url,height, width}=data
    return (
        <DesignConfigurator imgSrc={url} height={height} width={width} configId={id}/>
      )

 }
 catch(error){
    console.log(error)
    return notFound()
 }
 
}

export default page
