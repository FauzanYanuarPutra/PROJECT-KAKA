"use client"
import Footers from "@/components/Footer";
import LinkNavbar from "@/components/Navbar";
import { IconBuildingStore } from "@tabler/icons-react";
import { IconBasketFilled, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconChartBar, IconHome, IconUserFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <nav className="w-full  sticky top-0 bg-green-500 text-white z-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 px-5 py-6  lg:py-8 max-w-[1300px] mx-auto">
          <div className="">
            <h1 className="text-md md:text-lg font-bold">Syailendra Elektronik</h1>
          </div>
          <div className=" w-full mx-auto hidden lg:flex justify-center items-center  gap-5 font-medium text-lg">
            <div className="flex gap-6">
              <LinkNavbar href="/" name="Home"  />
              <LinkNavbar href="/products" name="Product"  />
              <LinkNavbar href="/about" name="About"  />
              <LinkNavbar href="/contact" name="Contact"  />
            </div>
          </div>
          <div className="flex justify-end items-center  items gap-1 text-sm font-medium">
            <Link href="/login" className="rounded-md ">
              <IconUserFilled size={26} />
            </Link>
            <Link href="/register" className="flex relative items-center gap-2 ">
              <IconBasketFilled size={26} />
              <div className="absolute top-[-14px] right-[-14px] bg-green-500 p-1 rounded-full w-7 flex justify-center items-center text-white line-clamp-1 h-7 text-[9px]">
                  3245
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="min-h-[100vh] bg-gray-100">{children}</div>
      <Footers></Footers>
      <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-green-500 text-white text-center px-5 lg:hidden">
        <div className="w-full flex h-full justify-evenly  items-center text-[12px]">
          <Link href={'/'} className="flex flex-col items-center">
            <IconHome size={20} />
            Home
          </Link>
          <Link href={'/products'} className="flex flex-col items-center">
            <IconBuildingStore size={20} />
            Products
          </Link>
          <Link href={'/about'} className="flex flex-col items-center">
            <IconHome size={20} />
            About
          </Link>
          <Link href={'/contact'} className="flex flex-col items-center">
            <IconHome size={20} />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}


