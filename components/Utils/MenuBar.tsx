import Menu from "@/app/icons/Menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FolderPlus } from "@/app/icons/FolderPlus";
import { AddToAlbumDialog } from "./AddToAlbumDialog";

export function MenuBar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="p-0 w-8 h-8">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-40  p-0">
        <DropdownMenuGroup>
          <DropdownMenuItem className="p-2" asChild>
            <AddToAlbumDialog/>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
