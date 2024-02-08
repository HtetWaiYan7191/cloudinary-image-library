"use client";
import React, { useState, useEffect } from "react";
import ImageCard from "../Gallery/ImageCard";
import { SearchResult } from "@/app/gallery/page";
import ImageGrid from "../Utils/ImageGrid";
import GalleryGrid from "../Gallery/GalleryGrid";

const FavoriteList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <ImageCard
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
            onUnheart={(unheartedResource: SearchResult) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
};

export default FavoriteList;
