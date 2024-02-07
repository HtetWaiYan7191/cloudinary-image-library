"use client";
import React, { useState } from "react";
import ImageCard from "../Gallery/ImageCard";
import { SearchResult } from "@/app/gallery/page";

const FavoriteList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
      {resources.map((result) => (
        <ImageCard
          key={result.public_id}
          imageData={result}
          width="400"
          height="300"
          crop="fill"
          sizes="100vw"
          alt=" a photo of something"
          onUnHeart={(unHeartedResource : SearchResult) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unHeartedResource.public_id
              )
            );
          }}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
