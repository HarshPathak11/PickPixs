"use client";

import { Progress } from '@/components/ui/progress';
import { useUploadThing } from '@/lib/uploadthing';
import { cn } from '@/lib/utils';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import React, { startTransition, useState, useTransition } from 'react'
import Dropzone from 'react-dropzone'

function page() {
    const [isDragOver, setIsDragOver] = useState(false)
    const [uploadProgress,setUploadProgress]=useState(0)

    const [isPending ,startTransition]=useTransition()

    const router = useRouter();
    const {toast}=useToast()

    const { startUpload , isUploading }=useUploadThing("imageUploader",{
        onClientUploadComplete:([data])=>{
            const configId=data.serverData.configId
            startTransition(()=>{
                router.push(`/configure/design?id=${configId}`)
            })
        },
        onUploadProgress(p){
            setUploadProgress(p)
        }
    })

    const onDropAccepted = (acceptedfiles) => {
        startUpload(acceptedfiles,{configId:undefined})
        setIsDragOver(false)
     }

    const onDropRejected = (rejectedfiles) => {
        const [file]=rejectedfiles
        setIsDragOver(false)
        toast({
            title:`${file.file.type} type not supported.`,
            description:"Please use JPG, PNG, JPEG file format.",
            variant:"destructive"
        })
    }


    return (
        <div className={
            cn('relative h-full flex-1 my-16 w-full rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
                {
                    'ring-blue-900/25 bg-blue-900/20': isDragOver
                })
        }>
            <div className='relative flex flex-col items-center justify-center'>
                <Dropzone
                    onDropAccepted={onDropAccepted}
                    onDropRejected={onDropRejected}
                    accept={{
                        "image/png": [".png"],
                        "image/jpg": [".jpg"],
                        "image/jpeg": [".jpeg"],
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}>
                    {({ getRootProps, getInputProps }) => (
                        <div className='h-full w-full flex-1 flex flex-col items-center justify-center' {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragOver ? (<MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' />) :
                                isUploading  || isPending ? (<Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2' />) :
                                    (<Image className='h-6 w-6 text-zinc-500 mb-2' />)}
                        <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                            {isUploading?<div className='flex flex-col items-center font-sans'>
                                <p>Uploading...</p>
                                <Progress className='mt-2 w-40 h-2 bg-gray-300' value={uploadProgress}/>
                            </div>:
                            isPending?<div className='flex flex-col items-center'>
                                    <p>Redirecting, please wait...</p>
                            </div>:
                            isDragOver?<p>
                                <span className=' font-semibold'>Drop File </span>
                                to upload
                            </p>:
                            <p>
                            <span className=' font-semibold'>Click to Upload </span>
                            or drag and drop
                            </p>
                            }
                        </div>
                        {isPending?null:
                        <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>}
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

export default page

