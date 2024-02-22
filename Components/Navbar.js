import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Navtab from "./Navtab";
import logo from "../public/qr-angadi.png";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar className="p-1" maxWidth="full" shouldHideOnScroll>
      <NavbarBrand className="gap-2">
        <Sheet>
          <SheetTrigger>
            <CiMenuBurger className="md:hidden" />
          </SheetTrigger>
          <SheetContent  side='left'>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Image className="hidden md:block md:h-10 md:w-24" src={logo} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex " justify="center">
        <Navtab />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="bg-apptheme rounded-full font-medium"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
