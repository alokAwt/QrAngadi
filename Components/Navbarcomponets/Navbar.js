import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Navtab from "./Navtab";
import logo from "../../public/qr-angadi.png";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebarnav from "./Sidebarnav";
import Link from "next/link";

export default function App() {
  return (
    <Navbar className="p-1  w-full" maxWidth="full" shouldHideOnScroll>
      <NavbarBrand className="gap-2">
        <Sheet>
          <SheetTrigger>
            <TiThMenu className="lg:hidden md:block" />
          </SheetTrigger>
          <SheetContent side="left" className="">
            <SheetHeader>
              <SheetTitle className="flex  items-center gap-2">
                <Image className="w-16 h-10" src={logo} />
                QR-Angadi
              </SheetTitle>
              <SheetDescription>
                <Sidebarnav />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Image
          className="hidden md:hidden lg:block lg:h-10 lg:w-24"
          src={logo}
        />
      </NavbarBrand>
      <NavbarContent className="hidden md:hidden lg:flex " justify="center">
        <Navtab />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <div
              className="bg-apptheme rounded-full font-medium p-2 w-24 text-center hover:ring-2 hover:ring-buttonopacitycolor"
              color="primary"
              variant="flat"
            >
          <Link href="/Login">
              Login
          </Link>
            </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
