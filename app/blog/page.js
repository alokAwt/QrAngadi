"use client";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [comment, setComment] = useState("");
  const mainArticle = {
    imageUrl: "/gamification/main.png",
    head: "How QR Angadi Transforms Marketing Campaigns?",
    description:
      "Gamification has become a buzzword in the marketing world, and for good reason. Interactive games not only captivate audiences but also drive engagement and brand loyalty...",
  };

  const recentArticles = [
    {
      imgUrl: "/blog/four.png",
      head: "How AI works with QR?",
      description:
        "AI with QR will be the future of sharing files at the most efficient way.",
    },
    {
      imgUrl: "/blog/two.png",
      head: "Marketing with QR Codes",
      description:
        "QR Angadi emerges as a game-changer, providing the best solution for QR codes.",
    },
    {
      imgUrl: "/blog/three.png",
      head: "QR will make our life easier?",
      description:
        "From A to Z, QR are helping us the way we interact with the world around us.",
    },
    {
      imgUrl: "/blog/one.png",
      head: "Why QR Angadi is best?",
      description: "We can generate, customize, share our QR codes!",
    },
  ];

  const moreBlogs = [
    {
      date: "Feb 27, 2024",
      head: "How QR will help in our daily life?",
      description:
        "QR codes are simplifying life in more ways than we may realize. From making payments to accessing information, these little black-and-white squares are revolutionizing the way we interact with the world around us.",
    },
    {
      date: "Feb 27, 2024",
      head: "Can we make transactions through QR?",
      description:
        "Say goodbye to digging through your wallet for cash or swiping cards. With QR codes, making payments is as easy as scanning a code with your smartphone. Whether you're buying groceries, ordering food, or splitting a bill with friends, QR codes make transactions swift, secure, and hassle-free.",
    },
    {
      date: "Feb 27, 2024",
      head: "QR code’s Enhanced Accessibility!",
      description:
        "Accessibility is a fundamental aspect of modern living, and QR codes are playing a pivotal role in making information more readily available to everyone. By embedding QR codes in printed materials, products, and signage, organizations can bridge the gap between physical and digital realms, catering to diverse audiences with varying needs. For individuals with visual impairments, QR codes equipped with audio descriptions or Braille instructions can provide essential information that might otherwise be inaccessible. Similarly, multilingual QR codes can facilitate communication across language barriers, ensuring inclusivity and equal access to information for all.",
    },
  ];
  // SUBMIT COMMENT
  const handleSubmit = () => {
    console.log(comment);
  };
  return (
    <div className="sm:mt-5 md:mt-5">
      <h1 className="font-bold text-5xl  text-center mb-10">Blogs</h1>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap gap-10 sm:px-2 ">
          <div className="min-w-[280px] p-5 pt-2 flex-1">
            <h2 className="font-bold text-3xl ml-3 text-left">
              Gamification Trends
            </h2>
            <Image
              src={mainArticle.imageUrl}
              height={500}
              width={500}
              unoptimized
            />
            <div className="font-semibold text-md">{mainArticle.head}</div>
            <div className="font-normal mt-2 text-sm">
              {mainArticle.description}{" "}
              <span className="font-semibold text-buttoncolor">Read More</span>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex rounded-lg border-[1px] border-[#00000040]  overflow-hidden items-center pe-2.5">
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="border-0 outline-none w-[calc(100% - 60px)]"
                  placeholder="leave a comment"
                  style={{ width: "calc(100% - 60px)" }}
                />
                <span
                  className="text-xs flex-1 text-buttoncolor font-poppins font-semibold cursor-pointer"
                  onClick={handleSubmit}
                >
                  Submit
                </span>
              </div>
            </div>
          </div>
          <div className="min-w-[280px] p-5 pt-2 flex-1 flex flex-col ">
            <span className="font-semibold text-lg">Recent articles</span>
            <div className="flex flex-col gap-3">
              {recentArticles.map((article, index) => {
                return (
                  <div
                    className="flex gap-5 max-[375px]:flex-wrap md:flex-nowrap"
                    key={index}
                  >
                    <Image
                      src={article.imgUrl}
                      height={100}
                      width={100}
                      style={{ maxHeight: "100px", maxWidth: "100px" }}
                    />
                    <div className="flex flex-col gap-1 min-w-[250px]">
                      <span className="font-semibold text-md">
                        {article.head}
                      </span>
                      <span className="font-normal text-sm">
                        {article.description}
                      </span>

                      <span className="font-semibold text-sm">Read more</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[1200px] mx-auto px-5">
          <h1 className="font-bold text-3xl my-10">More Blogs</h1>
          {moreBlogs.map((blog, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <span className="italic text-sm font-semibold">
                  {blog.date}
                </span>
                <span className="my-3 text-3xl font-semibold">{blog.head}</span>
                <span className="text-md">{blog.description}</span>
                <button className="bg-buttoncolor text-white font-semibold max-w-fit py-1 px-10 text-sm rounded-sm mb-10 mt-3">
                  Read more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
