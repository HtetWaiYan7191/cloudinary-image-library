'use server'
// create folder in cloudinary server
import cloudinary from "cloudinary";
import { SearchResult } from "./app/gallery/page";

export async function CreateFolder(folder: string, image: SearchResult) {
  await cloudinary.v2.api.create_folder(folder);

  let parts = image.public_id.split('/');
  if(parts.length > 1) {
    parts = parts.slice(1);
  }

  const publicId = parts.join('/')

  await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${publicId}`)
}
