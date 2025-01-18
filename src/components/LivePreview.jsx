// components/LivePreview.jsx
import React from 'react';
import NextImage from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

function LivePreview({ imgSrc, options, position, dimension,phonecaseRef,containerRef }) {
 console.log(position)
  return (
         <div className="relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831] overflow-hidden rounded-[30px]">
                  <AspectRatio ratio={896/1831} className="pointer-events-none relative z-50 aspect-[896/1831] w-full overflow-hidden">
                    <NextImage fill src="/phone-template.png" className="pointer-events-none z-50 select-none overflow-hidden" alt="Phone Template" />
              <div className="absolute z-40 inset-0 left[3px] top-px-right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
                  <div
                    className={cn('absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]', {
                      [`bg-${options.color.tw}`]: true,
                    })}
                  />
                  <div
          className="absolute"
          style={{
            top: position.actualY,
            left: position.actualX,
            width: dimension.width,
            height: dimension.height,
          }}
        >
          <NextImage src={imgSrc} fill alt="User Uploaded" className="pointer-events-none" />
        </div>
        </AspectRatio>
        </div>
        </div>
  );
}

export default LivePreview;
