import React from "react";
import ChartUp from "../icons/ChartUp";
import localFont from "next/font/local";
import DefaultImage from "../icons/twitter.png";
import StarIcon from "../icons/StarIcon";
import Image from "next/image";

const myFont = localFont({
  src: "../../app/sohne-superBold.otf",
});

const dummyTrendings = [
  {
    title: "The 5 Best Ways to Build Resiliency",
    author: "Darius Foroux",
    image: DefaultImage,
    readTime: "3 min read",
    date: "Nov 2",
  },
  {
    title: "Why I’m Not a Fan of the “Fake It Till You Make It” Approach",
    author: "Ayodeji Awosika",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 5",
  },
  {
    title: "The Chatbot Revolution is Here",
    author: "Chatbots Magazine",
    image: DefaultImage,
    readTime: "8 min read",
    date: "Nov 1",
    isPremium: <StarIcon />,
  },
  {
    title: "Good Design is Imperfect Design",
    author: "Muzli - Design Inspiration",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 3",
  },
  {
    title: "Ukraine is the Wild West of Cryptocurrency",
    author: "Alex Gladstein",
    image: DefaultImage,
    readTime: "5 min read",
    date: "Nov 4",
    isPremium: <StarIcon />,
  },
  {
    title: "The 'Male Loneliness Epidemic' Douesn't Exist",
    author: "Jude Ellison Sady Doyle",
    image: DefaultImage,
    readTime: "8 min read",
    date: "Sep 1",
    isPremium: <StarIcon />,
  },
];

const Trending = () => {
  return (
    <section className="border-b border-[#f2f2f2]">
      <div className="px-7 md:px-12 max-w-screen-xl m-auto pt-10 pb-4">
        <div className="flex items-center mb-4">
          <ChartUp />
          <h3 className={`text-base text-dark ${myFont.className} ml-3`}>
            Trending on Medium
          </h3>
        </div>

        <div className="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dummyTrendings.map((trending, index) => (
            <div key={trending.title}>
              <div className="flex gap-4 mb-6">
                <span className={`text-[#f2f2f2] text-3xl ${myFont.className}`}>
                  0{index + 1}
                </span>

                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="bg-sky-200 rounded-full w-[24px] h-[24px] overflow-hidden p-1">
                      <Image
                        src={trending.image}
                        alt={trending.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-sm">{trending.author}</span>
                  </div>
                  <h2 className={`mb-2 ${myFont.className}`}>
                    {trending.title}
                  </h2>
                  <div className="flex text-sm gap-2 items-center text-[#6b6b6b]">
                    <span>{trending.date}</span>
                    <span className={`${myFont.className} text-xl`}>·</span>
                    <span>{trending.readTime}</span>
                    {trending.isPremium}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
