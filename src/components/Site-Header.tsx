"use client";

import { usePathname, useRouter } from "next/navigation";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
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
import { Icons } from "./icons/icons";

export function SiteHeader() {
  const router = useRouter();
  const { theme } = useTheme();
  const pathname = usePathname();
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
    <header className="backdrop-blur-lg fixed top-0 right-0 left-0 z-10">
      <div className="flex justify-between items-center p-2 container max-w-screen-2xl">
        <div className="flex items-center">
          <Icons.logo />
          <span className="ml-4 text-lg font-bold">Codelearn for kids</span>
        </div>
        <div
          className={clsx("flex w-2/5", {
            "invisible": pathname === "/roadmap",
          })}
        >
          <Input
            type="text"
            placeholder="Search course, post,..."
            className="rounded-tr-none rounded-br-none focus-visible:ring-none focus-visible:ring-0"
          />
          <Button className="rounded-tl-none rounded-bl-none">
            <Icons.search />
          </Button>
        </div>
        <div className="flex items-center">
          {session
            ? (
              <div className="flex items-center">
                <div className="cursor-pointer">
                  <Icons.notify />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="cursor-pointer h-8 w-8 ml-4">
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
                      Logout
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
