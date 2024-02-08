"use client";

import ImageCard from "@/components/Gallery/ImageCard";
import ImageGrid from "@/components/Utils/ImageGrid";
import { SearchResult } from "@/app/gallery/page";

const GalleryGrid =  ({ images }: { images: SearchResult[] }) => {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => (
        <ImageCard
          path="/gallery"
          key={imageData.public_id}
          imageData={imageData}
          width="400"
          height="300"
          sizes="100vw"
          alt=" a photo of something"
        />
      )}
    />
  );
};

export default GalleryGrid;
