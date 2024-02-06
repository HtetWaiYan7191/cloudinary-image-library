import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
const Navbar = () => {
  return (
    <section className="navbar-section border-b">
      <div className="navbar-wrapper flex items-center p-4">
        <h2>PHOTOS APP</h2>
        <div className="ml-auto">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
