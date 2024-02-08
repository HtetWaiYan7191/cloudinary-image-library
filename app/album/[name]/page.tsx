import React from "react";
import UploadBtn from "@/components/Utils/UploadBtn";
import cloudinary from "cloudinary";
import ImageCard from "@/components/Gallery/ImageCard";
import ForceRefresh from "@/components/Utils/ForceRefresh";
import ImageGrid from "@/components/Utils/ImageGrid";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import AlbumGrid from "./AlbumGrid";
import { SearchResult } from "@/app/gallery/page";

const MyAlbum = async ({params}: {params: {name:string}}) => {
  const {name} = params;
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${name}`)
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: SearchResult[] };

  return (
    <section className=" w-full pt-12 px-6">
      <ForceRefresh />
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold capitalize">{name}</h1>
      </div>
      <AlbumGrid images={results.resources}/>
    </section>
  );
};

export default MyAlbum;
