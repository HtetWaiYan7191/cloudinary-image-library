import React from "react";
import UploadBtn from "@/components/Utils/UploadBtn";
import cloudinary from "cloudinary";
import ImageCard from "@/components/Gallery/ImageCard";
import ForceRefresh from "@/components/Utils/ForceRefresh";
import ImageGrid from "@/components/Utils/ImageGrid";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import { AlbumCard } from "@/components/Utils/AlbumCard";

export interface FolderAlbumProps {
  name: string;
  path: string;
}

const Album = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderAlbumProps[];
  };

  return (
    <section className=" w-full pt-12 px-6">
      <ForceRefresh />
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Albums</h1>
      </div>

      <div className="folder-container mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ForceRefresh/>
        {folders.map((folder) => (
          <AlbumCard key={folder.path} folder={folder} />
        ))}
      </div>
    </section>
  );
};

export default Album;
