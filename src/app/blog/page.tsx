"use client";

import { useSearchParams } from "next/navigation";
import Article from "./component/Article";
import { ArticlePagination } from "./component/Pagination";

export default function ArticlePage() {
  const Posts = [
    {
      user: {
        avatar: "/favicon/fe.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/be.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/be.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/be.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/fe.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge 2",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/be.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/be.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
    {
      user: {
        avatar: "/favicon/be.png",
        name: "John Doe",
      },
      title: "John Doe's Knowledge",
      desc:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      thumbnail: "/favicon/devops.png",
      hashtag: ["front-end", "back-end"],
    },
  ];

  const ITEM_PER_PAGE = 4;
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div className="pl-16 pr-0 py-2 flex flex-col justify-center items-start container">
      <div className="flex flex-col justify-center items-start ">
        <span className="text-3xl font-extrabold mb-10">
          Featured Articles
        </span>
        <p className="w-3/5 text-gray-400 font-light">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <div className="flex mt-16">
          <div className="grid row-4 gap-4">
            {Posts.slice(
              ITEM_PER_PAGE * (currentPage - 1),
              ITEM_PER_PAGE * currentPage,
            ).map((
              post,
            ) => (
              <Article
                avatar={post.user.avatar}
                name={post.user.name}
                title={post.title}
                desc={post.desc}
                thumbnail={post.thumbnail}
                hashtags={post.hashtag}
              />
            ))}
          </div>
          <div className="pr-8">
            <span className="font-bold text-md">
              VIEW ARTICLES BY TOPIC
            </span>
            <div className="px-3 py-0.5 bg-gray-700 rounded-3xl cursor-pointer hover:bg-gray-500 transition ease-linear">
              react
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 self-center">
        <ArticlePagination totalPages={2} />
      </div>
    </div>
  );
}
