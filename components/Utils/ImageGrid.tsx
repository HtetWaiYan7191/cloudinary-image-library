'use server'// Add 'use server' to specify using the server
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
      {images.length === 0 ? (
        <h2>No Image In This Album...</h2>
      ) : (
        // Wrap the mapping of columns in a React fragment or div
        <>
          {[0, 1, 2, 3].map((colIndex) => (
            <div className="flex flex-col gap-4" key={colIndex}>
              {getColumns(colIndex).map((imageData, idx) => (
                <React.Fragment key={idx}>{getImage(imageData)}</React.Fragment>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ImageGrid;
