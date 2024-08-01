"use client";

import { useRouter } from "next/navigation";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { split } from "postcss/lib/list";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export function SiteHeader() {
  const router = useRouter();
  const { theme } = useTheme();
  const { data: session } = useSession();
  console.log(session);

  const getFallBack = (s: string) => {
    const result: any[] = [];
    const splitString = s.split(" ");

    splitString.forEach((word: string) => {
      result.push(word?.split("")[0] as string);
    });

    return result;
  };

  return (
    <header className="container max-w-screen-2xl backdrop-blur-lg fixed -top-25 z-10">
      <div className="flex justify-between items-center py-2 px-8">
        <div>Logo</div>
        <div className="flex w-2/5">
          <Input
            type="text"
            placeholder="Search course, post,..."
            className="rounded-tr-none rounded-br-none focus-visible:ring-none focus-visible:ring-0"
          />
          <Button className="rounded-tl-none rounded-bl-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Button>
        </div>

        <div className="flex items-center">
          {session
            ? (
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={session?.user?.image as string} />
                      <AvatarFallback>
                        {getFallBack(session?.user?.name as string)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>My Courses</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
              </div>
            )
            : (
              <div className="flex items-center">
                <Button
                  onClick={() => router.push("/signin")}
                  className={clsx("mr-2 ml-4 backdrop-blur", {
                    "text-white bg-[rgba(255,255,255,.05)] hover:bg-[rgba(255,255,255,.15)]":
                      theme === "dark",
                    "text-black bg-[rgba(0,0,0,.05)] hover:bg-[rgba(0,0,0,.15)":
                      theme === "light",
                  })}
                >
                  Sign In
                </Button>
                <Button onClick={() => router.push("/signup")}>Sign Up</Button>
                <ModeToggle />
              </div>
            )}
        </div>
      </div>
    </header>
  );
}
