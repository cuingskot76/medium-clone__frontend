import ArrowUp from "@/components/icons/ArrowUp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MediumLogo from "@/public/images/artboard.svg";
import Image from "next/image";
import SearchIcon from "@/components/icons/SearchIcon";
import UserProfile from "@/components/icons/userProfile.png";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import localFont from "next/font/local";
import PencilIcon from "@/components/icons/PencilIcon";
import StarIcon from "@/components/icons/StarIcon";
import { discoverTags } from "@/constants";

const myFontBold = localFont({
  src: "../../sohne-bold.otf",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <div className="h-10 flex items-center justify-between mt-2 px-6 lg:hidden">
          <Link href={"/"} className="flex items-center md:hidden">
            <p className="mr-2 text-sm text-[#6B6B6B]">Open in app</p>
            <ArrowUp />
          </Link>
          <div className="text-sm gap-5 md:flex md:justify-end md:w-full lg:hidden">
            <Button className="bg-[#1a8917] text-white hover:bg-[#156912] rounded-full p-0 m-0 w-fit h-fit py-1 px-2 mr-2 md:mr-0">
              Sign up
            </Button>
            <Button
              variant={"ghost"}
              className="text-[#6B6B6B] rounded-full  p-0 m-0 w-fit h-fit py-1 px-2"
            >
              Sign In
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center border-t lg:border-t-0 border-b border-[#F2F2F2] mt-2 px-6 ">
          <div className="sm:flex gap-4">
            <Link href={"/"}>
              <Image
                src={MediumLogo}
                alt="Medium Logo"
                width={70}
                height={70}
              />
            </Link>
            <div className="hidden sm:flex items-center relative">
              <SearchIcon className="absolute mx-3 items-center flex" />
              <input
                type="text"
                placeholder="Search Medium"
                className="w-[240px] bg-[#F9F9F9] rounded-2xl py-2 pr-5 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href={"/"} className="sm:hidden">
              <SearchIcon />
            </Link>
            <div className="hidden md:flex gap-2 text-sm text-[#6B6B6B]">
              <PencilIcon />
              <span>Write</span>
            </div>
            <div className="text-sm gap-2 hidden lg:flex">
              <Button className="bg-[#1a8917] text-white hover:bg-[#156912] rounded-full">
                Sign up
              </Button>
              <Button variant={"ghost"} className="text-[#6B6B6B] rounded-full">
                Sign In
              </Button>
            </div>
            <Popover>
              <PopoverTrigger>
                <p className="flex items-center ">
                  <div className="h-8 w-8 rounded-full bg-sky-200 items-center flex justify-center bg-cover bg-center overflow-hidden border border-[#F2F2F2] mr-1">
                    <Image
                      src={UserProfile}
                      alt="user profile"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <ChevronDownIcon />
                </p>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <div className="border-b border-[#F2F2F2] pb-5">
                    <h3
                      className={`text-base ${myFontBold.className} text-center mt-2`}
                    >
                      Get started on Medium
                    </h3>
                    <div className="flex flex-col mt-6 gap-4">
                      <Button className="bg-[#1a8917] text-white rounded-full hover:bg-[#156912]">
                        Sign up
                      </Button>
                      <Button
                        variant={"outline"}
                        className="text-[#6B6B6B] border-[#242424] rounded-full"
                      >
                        Sign up
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-5 border-b border-[#F2F2F2] pb-5">
                    <PencilIcon />
                    <p className="text-sm text-[#6B6B6B]">Write</p>
                  </div>

                  <div className="pt-5 flex flex-col gap-3 py-1 px-3 pb-5 border-b border-[#F2F2F2]">
                    <Link
                      href={"/"}
                      className="flex items-center justify-between"
                    >
                      <p className="text-sm text-[#6B6B6B]">Become a member</p>
                      <span className="scale-125">
                        <StarIcon />
                      </span>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Create a Mastodon account
                      </p>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Apply for author verification
                      </p>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Apply to Partner Program
                      </p>
                    </Link>
                    <Link href={"/"}>
                      <p className="text-sm text-[#6B6B6B]">
                        Gift a membership
                      </p>
                    </Link>
                  </div>

                  <div className=" flex flex-row flex-wrap gap-1 w-full pt-5">
                    {discoverTags.map((tag) => (
                      <Link href={"/"} key={tag.name}>
                        <p className="text-xs text-[#6B6B6B] py-2 px-3 hover:bg-[#F2F2F2]">
                          {tag.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      {children}
    </section>
  );
}
