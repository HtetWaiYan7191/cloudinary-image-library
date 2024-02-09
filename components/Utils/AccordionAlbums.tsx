import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Album } from "@/app/icons/Album";
import { FolderAlbumProps } from "@/app/album/page";
import { Button } from "../ui/button";

export function AccordionAlbums({ folders }: { folders: FolderAlbumProps[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          <Link href="/album" className="flex items-center w-full ps-3">
            <Album />
            Albums
          </Link>
        </AccordionTrigger>
        <AccordionContent className="px-5">
          {folders?.map((folder) => (
            <Button variant="link" className="" key={folder.path} asChild>
              <Link href={`/album/${folder.path}`} >
                {folder.name}
              </Link>
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
