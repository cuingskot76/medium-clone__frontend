import { Button } from "@/components/ui/button";
import MediumHero from "@/components/icons/M.svg";
import Image from "next/image";
import localFont from "next/font/local";
import Trending from "@/components/Home/Trending";
import Blogs from "@/components/Home/Blogs";

const myFont = localFont({
  src: "./super.otf",
});

export default function Home() {
  return (
    <section>
      <div className="bg-yellow relative border-b border-dark overflow-hidden">
        <div className="max-w-screen-xl m-auto h-[449px] px-7 md:px-12 flex items-center justify-between ">
          <div className="max-w-xl">
            <h1 className={`text-7xl lg:text-[100px] ${myFont.className}`}>
              Stay curious.
            </h1>
            <h3 className="text-2xl max-w-md mb-12 mt-9 text-dark">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
            <Button className="text-xl py-2 px-5 rounded-full w-[213px]">
              Start reading
            </Button>
          </div>
          <div className="hidden absolute -right-32 lg:right-0 md:block scale-110">
            <Image
              src={MediumHero}
              alt="Medium Hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div>
        <Trending />
        <Blogs />
      </div>
    </section>
  );
}
