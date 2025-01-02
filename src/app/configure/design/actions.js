'use server';

import mongoose from 'mongoose';
import Imgconfig from '@/model/Imgconfig'; // Adjust the import to your models
import { connectToDatabase } from '@/lib/db'; // Ensure you have a database connection utility

export async function updateImgconfig(configId, model, finish, color, material) {
  // Connect to the database
  await connectToDatabase();

  // Validate input
  if (!configId || !model || !finish || !color || !material) {
    throw new Error('All fields are required');
  }
//   console.log(configId,model,finish,color,material)

  // Find and update the Imgconfig document
//   const updatedConfig = await Imgconfig.findOneAndUpdate(
//     { _id: configId },
//     { model:model, finish:finish, color:color, material:material },
//     { new: true, runValidators: true } // Return the updated document and validate fields
//   );

//   console.log(updatedConfig)
// const originalConfig = await Imgconfig.findById(configId);
// console.log('Original Config:', originalConfig);

const updatedConfig = await Imgconfig.findOneAndUpdate(
  { _id: configId },
  { model, finish, color, material },
  { new: true, runValidators: true }
);
// console.log('Updated Config:', updatedConfig);

  // Check if the document exists
  if (!updatedConfig) {
    throw new Error('Configuration not found');
  }

  return {message:"success"};
}
