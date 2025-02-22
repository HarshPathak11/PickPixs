"use client"
// import { AspectRatio } from '@/components/ui/aspect-ratio'
// import React from 'react'
// import NextImage from 'next/image'
// import { cn, formatPrice } from '@/lib/utils'
// import { Rnd } from 'react-rnd'
// import { ScrollArea } from '@/components/ui/scroll-area'
// import { Description, Radio, RadioGroup } from '@headlessui/react'
// import { COLORS , FINISHES, MATERIALS, MODELS } from '@/validators/option-validator'
// import { Label } from '@/components/ui/label'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
// import { Button } from '@/components/ui/button'
// import { ArrowRight, ChevronsUpDown } from 'lucide-react'
// import { BASE_PRICE } from '@/config/prices'
// import { useToast } from '@/hooks/use-toast'
// import { useUploadThing } from '@/lib/uploadthing'
// import { updateImgconfig } from './actions'
// import { useRouter } from 'next/navigation'

// function HandleComponent(){
//     return(
//         <div className='w-5 h-5 rounded-full shadow border bg-white border-zinc-200 transition hover:bg-primary'/>
//     )
// }



// function DesignConfigurator({imgSrc,height,width,configId}) {

//    const [options,setOptions]=React.useState({
//       color:COLORS[0],
//       model:MODELS.options[0],
//       material:MATERIALS.options[0],
//       finish:FINISHES.options[0]
//    })
//    const {toast}=useToast();
//    const router=useRouter()

//    const {startUpload}=useUploadThing('imageUploader')

//    const [renderedPosition,setRenderedPosition]=React.useState({
//       x:150,
//       y:200
//    })

//    const [renderedDimension,setRenderedDimension]=React.useState({
//       height:height/4,
//       width:width/4
//    })

//    const phonecaseRef=React.useRef(null)
//    const containerRef=React.useRef(null)

//    const [loading, setLoading] = React.useState(false);
//    const [error, setError] = React.useState(null);
 
//    const handleUpdate = async () => {
//    //   setLoading(true);
//      setError(null);
//      try {
//        const updatedConfig = await updateImgconfig(
//          configId,
//          options.model.value,
//          options.finish.value,
//          options.color.value,
//          options.material.value,
         
//        );
//       //  console.log('Update successful:', updatedConfig);
//      } catch (err) {
//        setError(err.message);
//        toast({
//          title: 'Something went wrong',
//          description:
//            'There was a problem saving your config, please try again.',
//          variant: 'destructive',
//        })

//      } 
//    };

//    async function SaveConfiguration(obj) {
//       try {
//          setLoading(true)
//          handleUpdate()
         
//          const {left:caseLeft,top:caseTop,height,width}=phonecaseRef.current.getBoundingClientRect()
//          const {left:containerLeft,top:containerTop}=containerRef.current.getBoundingClientRect()

//          const leftOffset=caseLeft-containerLeft;
//          const rightOffset=caseTop-containerTop;

//          const actualX=renderedPosition.x-leftOffset;
//          const actualY=renderedPosition.y-rightOffset

//          const canvas=document.createElement("canvas")
//          canvas.width=width;
//          canvas.height=height

//          const ctx=canvas.getContext('2d')

//          const userImage = new Image()
//          userImage.crossOrigin = 'anonymous'
//          userImage.src = imgSrc
//          await new Promise((resolve) => (userImage.onload = resolve))
   
//          ctx?.drawImage(
//            userImage,
//            actualX,
//            actualY,
//            renderedDimension.width,
//            renderedDimension.height
//          )
   
//          const base64 = canvas.toDataURL()
//          const base64Data = base64.split(',')[1]
//          console.log(base64)
   
//          const blob = base64ToBlob(base64Data, 'image/png')
//          const file = new File([blob], 'filename.png', { type: 'image/png' })
        
   
//          await startUpload([file], { configId })
//          setLoading(false)
//          router.push(`/configure/preview?id=${configId}`)
//        } catch (err) {
//          toast({
//            title: 'Something went wrong',
//            description:
//              'There was a problem saving your config, please try again.',
//            variant: 'destructive',
//          })
//        }
//        finally{
//          setLoading(false)
//        }
//      }
   
//      function base64ToBlob(base64 ,mimeType) {
//        const byteCharacters = atob(base64)
//        const byteNumbers = new Array(byteCharacters.length)
//        for (let i = 0; i < byteCharacters.length; i++) {
//          byteNumbers[i] = byteCharacters.charCodeAt(i)
//        }
//        const byteArray = new Uint8Array(byteNumbers)
//        return new Blob([byteArray], { type: mimeType })
//      }



//   return (
//     <div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
//     <div ref={containerRef} className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2
//      border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
//      <div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
//         <AspectRatio ref={phonecaseRef} ratio={896/1831} className='pointer-events-none relative z-50 aspect-[896/1831] w-full'>
//         <NextImage fill src='/phone-template.png' 
//             className='pointer-events-none z-50 select-none'
//             alt='this is a phone pic '
//         />
//         </AspectRatio>
//         <div className=' absolute z-40 inset-0 left[3px] top-px-right-[3px] bottom-px rounded-[32px]
//          shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]'/>
//          <div className={cn('absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]',
//          {
//             [`bg-${options.color.tw}`]:true
//          })}/>
//           </div>
//          <Rnd default={
//             {
//                 x:150,
//                 y:200,
//                 height:height/4,
//                 width:width/4
//             }
//          }
//          onDragStop={(_,data)=>{
//             const {x,y}=data
//             setRenderedPosition({x,y})
//          }}
//          onResizeStop={(event, direction, ref, delta, position)=>{
//             const {x,y}=position
//             setRenderedDimension({
//                height:parseInt(ref.style.height.slice(0,-2)),
//                width:parseInt(ref.style.width.slice(0,-2))
//             })

//             setRenderedPosition({x,y});
//          }}
//          lockAspectRatio
//          resizeHandleComponent={{
//             bottomRight:<HandleComponent/>,
//             bottomLeft:<HandleComponent/>,
//             topLeft:<HandleComponent/>,
//             topRight:<HandleComponent/>   
//          }
//          }
//          >
//          <div className='relative w-full h-full'>
//             <NextImage src={imgSrc}
//             fill
//             alt='your image'
//             className=' pointer-events-none'
//             />
//          </div>
//          </Rnd> 
//     </div>
//     <div className='h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white'>
//     <ScrollArea className='relative flex-1 overflow-auto'>
//          <div 
//             aria-hidden='true'
//             className='absolute z-10 inset-x-0 bottom-0
//              h-12 bg-gradient-to-t from-white pointer-events-none'
//          />
//          <div className='px-8 pb-12 pt-8'>
//             <h2 className='tracking-tight font-bold text-3xl'>Customize your Case</h2>
//             <div className='w-full h-px bg-zinc-200 my-6' />

//             <div className=' relative mt-4 h-full flex flex-col justify-between'>
//             <div className=' flex flex-col gap-6'>
//                <RadioGroup value={options.color} onChange={(val)=>{
//                   setOptions((prev)=>({
//                      ...prev,
//                      color:val
//                   }))
//                }}>
//                <Label>Color: {options.color.label}</Label>
//                <div className='mt-3 flex items-center space-x-3'>
//                   {COLORS.map((color)=>(
//                      <Radio key={color.label} 
//                      value={color}
//                      className={({active,checked})=>cn("relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
//                      {
//                         [`border-${color.tw}`]:active||checked
//                      })}>
//                      <span className={cn(`bg-${color.tw}`,'h-8 w-8 rounded-full border border-black border-opacity-10')} />
//                      </Radio>
//                   ))}
//                </div>
//                </RadioGroup>

//                <div className='relative flex flex-col gap-y-2'>
//                   <Label>Model</Label>
//                   <DropdownMenu>
//                      <DropdownMenuTrigger asChild>
//                         <Button
//                         variant='outline'
//                         role='combobox'
//                         className='w-full justify-between'
//                         >
//                         {options.model.label}
//                         <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50'/>
//                         </Button>
//                      </DropdownMenuTrigger>
//                      <DropdownMenuContent>
//                         {MODELS.options.map((model)=>(
//                            <DropdownMenuItem 
//                            key={model.label}
//                            className={cn('flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100',{
//                               'bg-zinc-200':model.label===options.model.label
//                            })}
//                            onClick={()=>{
//                               setOptions((prev)=>({
//                                  ...prev,
//                                  model
//                               })
//                            )}}
//                            >
//                            {model.label}
//                            </DropdownMenuItem>
//                         ))}
//                      </DropdownMenuContent>
//                   </DropdownMenu>
//                </div>

//                {[MATERIALS, FINISHES].map(({ name, options: selectableOptions }) => (
//                   <RadioGroup
//                      key={name}
//                      value={options[name]}
//                      onChange={(val) => {
//                         setOptions((prev) => ({
//                         ...prev,
//                         [name]: val,
//                         }));
//                      }}
//                   >
//                      <Label>
//                         {name.slice(0, 1).toUpperCase() + name.slice(1)}
//                      </Label>
//                      <div className="mt-3 space-y-4">
//                         {selectableOptions.map((option) => (
//                         <Radio
//                            key={option.value}
//                            value={option}
//                            className={({ active, checked }) =>
//                               cn(
//                               "relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none",
//                               {
//                                  'border-primary':active || checked
//                               }
//                               )
//                            }
//                         >
//                         <span className='flex items-center justify-between sm:flex-row'>
//                            <span className='flex flex-col text-sm'>
//                               <Label as='span' className='font-medium text-gray-900' >
//                                  {option.label}
//                               </Label>
//                               {option.description? 
//                               <Description as='span' className='text-gray-500'>
//                                  <span className='block sm:inline'>
//                                     {option.description}
//                                  </span>
//                               </Description>:null}
//                            </span>
//                            <Description className='mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right'>
//                            <span className='font-medium text-gray-900 '>
//                               {formatPrice(option.price/100)}
//                            </span>
//                         </Description>
//                         </span>

                        
//                         </Radio>
//                         ))}
//                      </div>
//                   </RadioGroup>
//                   ))}

//                </div>
//             </div>
//          </div>
//     </ScrollArea>
   

//     <div className='w-full px-8 h-16 bg-white'>
//           <div className='h-px w-full bg-zinc-200' />
//           <div className='w-full h-full flex justify-end items-center'>
//             <div className='w-full flex gap-6 items-center'>
//               <p className='font-medium whitespace-nowrap'>
//                 {formatPrice(
//                   (BASE_PRICE + options.finish.price + options.material.price) /
//                     100
//                 )}
//               </p>
//               <Button
//                 disabled={loading}
//                 loadingtext="Saving"
//                 onClick={() =>
//                   SaveConfiguration({
//                     configId,
//                     color: options.color.value,
//                     finish: options.finish.value,
//                     material: options.material.value,
//                     model: options.model.value,
//                   })
                  
//                 }
//                 size='sm'
//                 className='w-full'>
//                 Continue
//                 <ArrowRight className='h-4 w-4 ml-1.5 inline' />
//               </Button>
//             </div>
//           </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default DesignConfigurator

































// components/DesignConfigurator.jsx
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import NextImage from 'next/image';
import { cn, formatPrice } from '@/lib/utils';
import { Rnd } from 'react-rnd';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Description, Radio, RadioGroup } from '@headlessui/react';
import { COLORS, FINISHES, MATERIALS, MODELS } from '@/validators/option-validator';
import { Label } from '@/components/ui/label';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronsUpDown } from 'lucide-react';
import { BASE_PRICE } from '@/config/prices';
import { useToast } from '@/hooks/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import { updateImgconfig } from './actions';
import { useRouter } from 'next/navigation';
import LivePreview from '@/components/LivePreview'; // Import the LivePreview component
import throttle from 'lodash/throttle';

function HandleComponent() {
  return <div className="w-5 h-5 rounded-full shadow border bg-white border-zinc-200 transition hover:bg-primary" />;
}

function DesignConfigurator({ imgSrc, height, width, configId }) {
  const [options, setOptions] = React.useState({
    color: COLORS[0],
    model: MODELS.options[0],
    material: MATERIALS.options[0],
    finish: FINISHES.options[0],
  });
  const { toast } = useToast();
  const router = useRouter();

  const { startUpload } = useUploadThing('imageUploader');

  const [renderedPosition, setRenderedPosition] = React.useState({
    x: 150,
    y: 200,
  });

  const [renderedDimension, setRenderedDimension] = React.useState({
    height: height / 4,
    width: width / 4,
  });

  const [livepreviewPosition,setLivePreviewPosition]=React.useState({
   actualX: 150,
   actualY: 200,
  })

  const phonecaseRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Throttled state setters
  const throttledSetRenderedPosition = React.useMemo(
    () =>
      throttle((x, y) => {
      const { left: caseLeft, top: caseTop, height, width } = phonecaseRef.current.getBoundingClientRect();
      const { left: containerLeft, top: containerTop } = containerRef.current.getBoundingClientRect();

      const leftOffset = caseLeft - containerLeft;
      const rightOffset = caseTop - containerTop;

      const actualX = x - leftOffset;
      const actualY = y - rightOffset;
      console.log(actualX,actualY)
      setLivePreviewPosition({actualX,actualY})
      setRenderedPosition({ x, y });
      }, 100),
    []
  );

  const throttledSetRenderedDimension = React.useMemo(
    () =>
      throttle((width, height) => {
        setRenderedDimension({ width, height });
      }, 100),
    []
  );

  const handleUpdate = async () => {
    setError(null);
    try {
      const updatedConfig = await updateImgconfig(
        configId,
        options.model.value,
        options.finish.value,
        options.color.value,
        options.material.value
      );
      // Handle success if needed
    } catch (err) {
      setError(err.message);
      toast({
        title: 'Something went wrong',
        description: 'There was a problem saving your config, please try again.',
        variant: 'destructive',
      });
    }
  };

  async function SaveConfiguration(obj) {
    try {
      setLoading(true);
      await handleUpdate();

      const { left: caseLeft, top: caseTop, height, width } = phonecaseRef.current.getBoundingClientRect();
      const { left: containerLeft, top: containerTop } = containerRef.current.getBoundingClientRect();

      const leftOffset = caseLeft - containerLeft;
      const rightOffset = caseTop - containerTop;

      const actualX = renderedPosition.x - leftOffset;
      const actualY = renderedPosition.y - rightOffset;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');

      const userImage = new Image();
      userImage.crossOrigin = 'anonymous';
      userImage.src = imgSrc;
      await new Promise((resolve) => (userImage.onload = resolve));

      ctx?.drawImage(userImage, actualX, actualY, renderedDimension.width, renderedDimension.height);

      const base64 = canvas.toDataURL();
      const base64Data = base64.split(',')[1];
      console.log(base64);

      const blob = base64ToBlob(base64Data, 'image/png');
      const file = new File([blob], 'filename.png', { type: 'image/png' });

      await startUpload([file], { configId });
      setLoading(false);
      router.push(`/configure/preview?id=${configId}`);
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'There was a problem saving your config, please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20">
      <div ref={containerRef} className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio ref={phonecaseRef} ratio={896/1831} className="pointer-events-none relative z-50 aspect-[896/1831] w-full">
            <NextImage fill src="/phone-template.png" className="pointer-events-none z-50 select-none" alt="Phone Template" />
          </AspectRatio>
          <div className="absolute z-40 inset-0 left[3px] top-px-right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn('absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]', {
              [`bg-${options.color.tw}`]: true,
            })}
          />
        </div>
        <Rnd
          default={{
            x: 150,
            y: 200,
            height: height / 4,
            width: width / 4,
          }}
          onDragStop={(_, data) => {
            const { x, y } = data;
            throttledSetRenderedPosition(x, y);
          }}
          onResizeStop={(event, direction, ref, delta, position) => {
            const newWidth = parseInt(ref.style.width.slice(0, -2));
            const newHeight = parseInt(ref.style.height.slice(0, -2));
            throttledSetRenderedDimension(newWidth, newHeight);
            throttledSetRenderedPosition(position.x, position.y);
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topLeft: <HandleComponent />,
            topRight: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <NextImage src={imgSrc} fill alt="User Uploaded" className="pointer-events-none" />
          </div>
        </Rnd>
      </div>

      {/* Live Preview Section */}
      <div className="col-span-1 lg:col-span-1 mt-10 lg:mt-0">
        <LivePreview imgSrc={imgSrc} options={options} position={livepreviewPosition} dimension={renderedDimension} phonecaseRef={phonecaseRef} containerRef={containerRef} />
      </div>

      <div className="h-[37.5rem] mt-5 w-full col-span-3 lg:col-span-3 flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />
          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">Customize your Case</h2>
            <div className="w-full h-px bg-zinc-200 my-6" />

            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                {/* Color Selection */}
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({
                      ...prev,
                      color: val,
                    }));
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="mt-3 flex items-center space-x-3">
                    {COLORS.map((color) => (
                      <Radio
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent',
                            {
                              [`border-${color.tw}`]: active || checked,
                            }
                          )
                        }
                      >
                        <span className={cn(`bg-${color.tw}`, 'h-8 w-8 rounded-full border border-black border-opacity-10')} />
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>

                {/* Model Selection */}
                <div className="relative flex flex-col gap-y-2">
                  <Label>Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" role="combobox" className="w-full justify-between">
                        {options.model.label}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn('flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100', {
                            'bg-zinc-200': model.label === options.model.label,
                          })}
                          onClick={() => {
                            setOptions((prev) => ({
                              ...prev,
                              model,
                            }));
                          }}
                        >
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Materials and Finishes */}
                {[MATERIALS, FINISHES].map(({ name, options: selectableOptions }) => (
                  <RadioGroup
                    key={name}
                    value={options[name]}
                    onChange={(val) => {
                      setOptions((prev) => ({
                        ...prev,
                        [name]: val,
                      }));
                    }}
                  >
                    <Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Label>
                    <div className="mt-3 space-y-4">
                      {selectableOptions.map((option) => (
                        <Radio
                          key={option.value}
                          value={option}
                          className={({ active, checked }) =>
                            cn(
                              'relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow-sm border-2 border-zinc-200 focus:outline-none',
                              {
                                'border-primary': active || checked,
                              }
                            )
                          }
                        >
                          <span className="flex items-center justify-between sm:flex-row">
                            <span className="flex flex-col text-sm">
                              <Label as="span" className="font-medium text-gray-900">
                                {option.label}
                              </Label>
                              {option.description ? (
                                <Description as="span" className="text-gray-500">
                                  <span className="block sm:inline">{option.description}</span>
                                </Description>
                              ) : null}
                            </span>
                            <Description className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
                              <span className="font-medium text-gray-900">
                                {formatPrice(option.price / 100)}
                              </span>
                            </Description>
                          </span>
                        </Radio>
                      ))}
                    </div>
                  </RadioGroup>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full px-8 h-16 bg-white">
          <div className="h-px w-full bg-zinc-200" />
          <div className="w-full h-full flex justify-end items-center">
            <div className="w-full flex gap-6 items-center">
              <p className="font-medium whitespace-nowrap">
                {formatPrice((BASE_PRICE + options.finish.price + options.material.price) / 100)}
              </p>
              <Button
                disabled={loading}
                loadingtext="Saving"
                onClick={() =>
                  SaveConfiguration({
                    configId,
                    color: options.color.value,
                    finish: options.finish.value,
                    material: options.material.value,
                    model: options.model.value,
                  })
                }
                size="sm"
                className="w-full"
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignConfigurator;
