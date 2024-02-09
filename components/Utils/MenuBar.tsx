'use client'
import Menu from "@/app/icons/Menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

export function MenuBar({image} : {image: SearchResult}) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="p-0 w-8 h-8">
          <Menu/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-40  p-0">
        <DropdownMenuGroup>
          <DropdownMenuItem className="p-2" asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)}/>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`} className="flex px-3 ">
              <Pencil className="w-4 h-4 mr-3"/>
              Edit
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
