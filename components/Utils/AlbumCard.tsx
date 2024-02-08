import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FolderAlbumProps } from "@/app/album/page"
import Link from "next/link"

export function AlbumCard({folder} : {folder : FolderAlbumProps}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className=" capitalize">{folder.name}</CardTitle>
        <CardDescription>{ `All your ${folder.name} images `}</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex">
        <Button variant="outline" asChild>
            <Link href={`album/${folder.name}`}>
                View all images 
            </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
