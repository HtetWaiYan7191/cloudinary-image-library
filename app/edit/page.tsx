"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

const EditPage = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"
  >();
  return (
    <section className="w-full pt-12 px-6">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit {publicId}</h1>
      </div>
      <div>
        <div className="btn-container space-x-4 space-y-6">
          <Button
            variant="default"
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
          <Button
            variant="default"
            onClick={() => setTransformation("generative-fill")}
          >
            Generative Fill
          </Button>
          <Button
            variant="default"
            onClick={() => setTransformation("blur")}
          >
            Blur
          </Button>
          <Button
            variant="default"
            onClick={() => setTransformation("grayscale")}
          >
            GrayScale
          </Button>
          <Button
            variant="default"
            onClick={() => setTransformation("pixelate")}
          >
            PixeLate
          </Button>
        </div>
        <figure className="figure-image-container my-8 flex gap-6">
          <CldImage
            src={publicId}
            width={300}
            height={200}
            alt={`${publicId} image`}
          />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={`${publicId} image`}
              fillBackground
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={`${publicId} image`}
              blur
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={`${publicId} image`}
              grayscale
            />
          )}

          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt={`${publicId} image`}
              pixelate
            />
          )}
        </figure>
      </div>
    </section>
  );
};

export default EditPage;
