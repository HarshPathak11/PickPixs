import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";

const f = createUploadthing();


export const ourFileRouter = {
  
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
  .input(z.object({configId : z.string().optional()}))

    .middleware(async ({ input }) => {
      return {input}
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId }=metadata.input
     return { configId };
    }),
} 

