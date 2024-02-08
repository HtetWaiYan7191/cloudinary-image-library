'use server'
// create folder in cloudinary server
import cloudinary from "cloudinary";
import { SearchResult } from "./app/gallery/page";

export async function CreateFolder(folder: string, image: SearchResult) {
  await cloudinary.v2.api.create_folder(folder);
  await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${image.public_id}`)
}
