"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export interface UploadResult {
  event: "success";
  info: {
    public_id: string;
  };
};

export default function Home() {
  const [imageId, setImageId] = useState("cld-sample-3");

  return (
    <main className="flex flex-col justify-center items-center">
      <CldUploadButton
        uploadPreset="amhj8n3w"
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          restore
          gradientFade={true}
          crop="fill"
          alt=" a persone holding a basketball "
        />
      )}
    </main>
  );
}
