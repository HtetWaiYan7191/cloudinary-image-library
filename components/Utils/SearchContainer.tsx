"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchContainer = ({initialSearch} : {initialSearch: string}) => {
  const [searchTag, setSearchTag] = useState<string>(initialSearch ?? "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(`/gallery?search=${encodeURIComponent(searchTag)}`)
    router.refresh();
  };
  return (
    <div className="search-container w-full my-6">
      <form action="" onSubmit={handleSubmit}>
        <Label htmlFor="tag" className="text-lg mb-2 inline-block">
          Search By Tag
        </Label>
        <div className="input-wrapper flex gap-x-6 items-center">
          <Input
            id="picture"
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
            className=""
            type="text"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchContainer;
