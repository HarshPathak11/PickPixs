import { connectToDatabase } from "@/lib/db";
import mongoose from "mongoose";
import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
import Imgconfig from "@/model/Imgconfig"
import sharp from "sharp";

const f = createUploadthing();


export const ourFileRouter = {

    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1,
        },
    })
        .input(z.object({ configId: z.string().optional() }))

        .middleware(async ({ input }) => {
            return { input }
        })
        .onUploadComplete(async ({ metadata, file }) => {
            const { configId } = metadata.input
            const res = await fetch(file.url)
            const buffer = await res.arrayBuffer()
            const ImgMetaData = await sharp(buffer).metadata()

            const { height, width } = ImgMetaData


            if (!configId) {
                try {
                    await connectToDatabase();
                    const newConfig = await Imgconfig.create({
                        height, width, url: file.url
                    })

                    await newConfig.save()
                    

                    // console.log(newConfig)
                    return {configId:newConfig._id}
                } catch (error) {
                    console.error('Error saving document:', error);
                }
            }
            else{
                try {
                    await connectToDatabase();
                    const img = await Imgconfig.findOneAndUpdate(
                      { _id: configId },  // Query to find the document
                      { configuredUrl: file.url },  // Update operation
                      { new: true }  // Optional: Return the updated document
                    );

                // console.log('Updated Successfully',img)
                } catch (error) {
                   console.error('Error saving document:', error); 
                }
                
            }
            return { configId };
        }),
}

