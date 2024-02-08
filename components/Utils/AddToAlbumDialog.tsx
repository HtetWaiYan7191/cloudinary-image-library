'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "@/app/icons/FolderPlus";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import { CreateFolder } from "@/index";


export function AddToAlbumDialog({image} : {image: SearchResult}) {
    const [album, setAlbum] = useState('');
    const [open, setOpen] = useState(false);
    const handleSubmit = async () => {
        setOpen(false);
        await CreateFolder(album, image);
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" asChild>
          <div>
            <FolderPlus className="mr-2 h-6 w-6" />
            <span>Add To Album</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Add to album that you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="album" className="text-right">
              Album
            </Label>
            <Input
              id="family"
              defaultValue="Family"
              className="col-span-3"
              onChange={(e) => setAlbum(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
