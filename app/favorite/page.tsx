import React from "react";
import UploadBtn from "@/components/Utils/UploadBtn";
import cloudinary from "cloudinary";
import ImageCard from "@/components/Gallery/ImageCard";
import ForceRefresh from "@/components/Utils/ForceRefresh";

 export interface SearchResult {
  public_id: string;
  tags: string[];
}

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {results.resources.map((result) => (
          <ImageCard
            path="/favorite"
            key={result.public_id}
            imageData={result}
            width="400"
            height="300"
            crop="fill"
            sizes="100vw"
            alt=" a photo of something"
          />
        ))}
      </div>
    </section>
  );
};

export default Favorite;
