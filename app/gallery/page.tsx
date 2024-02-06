"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { UploadResult } from "../page";

const Gallery = () => {
  const [imageId, setImageId] = useState("cld-sample-3");

  return (
    <section className=" w-full pt-12 px-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <Button asChild>
          <div className="flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>

          <CldUploadButton
            uploadPreset="amhj8n3w"
            onUpload={(result: UploadResult) => {
              setImageId(result.info.public_id);
            }}
          />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
