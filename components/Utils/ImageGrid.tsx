'use client'
import { SearchResult } from "@/app/gallery/page";
import React, { ReactNode } from "react";

const MAX_COLUMNS = 4;

const ImageGrid = ({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) => {
  const getColumns = (colIndex: number) => {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div className="flex flex-col gap-4" key={idx}>
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
};

export default ImageGrid;
