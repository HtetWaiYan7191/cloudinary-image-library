import React from "react";
import UploadBtn from "@/components/Utils/UploadBtn";
import cloudinary from "cloudinary";
import ImageCard from "@/components/Gallery/ImageCard";
import ForceRefresh from "@/components/Utils/ForceRefresh";
import { SearchResult } from "../gallery/page";
import FavoriteList from "@/components/Favorite/FavoriteList";


const Favorite = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: SearchResult[] };

  return (
    <section className=" w-full pt-12 px-6">
        <ForceRefresh/>

      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favorite</h1>
        <UploadBtn />
      </div>

      <FavoriteList initialResources={results.resources} />
    </section>
  );
};

export default Favorite;
