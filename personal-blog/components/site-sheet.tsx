import { Sheet, SheetClose, SheetContent, SheetTrigger  } from "./ui/sheet";

import { Avatar,AvatarImage,AvatarFallback } from "./ui/avatar";

import { Icons } from "@/config/icons";

import { navlinks } from "@/config/navlinks";

import { siteConfig } from "@/config/site.config";

import Link from "next/link";



export default function SiteSheet(){

    return (
        <Sheet>
          <SheetTrigger asChild>
            <button className='btn btn-primary'>
            <Icons.menu className="h-8 w-8 md:h-10 md:w-10 lg:hidden" />
            </button>
          </SheetTrigger>
    
          <SheetContent>
        <div className="flex h-full w-full flex-col items-center justify-evenly gap-8 duration-700 animate-in slide-in-from-right-full">
          <SheetClose asChild>
            <Avatar className="w-40 h-40 md:w-48 md:h-48">
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>Stat</AvatarFallback>
            </Avatar>
          </SheetClose>

          <div className="flex flex-col items-center gap-8">
            {navlinks?.map(
              (item, index) =>
                item.href && (
                  <SheetClose asChild key={index}>
                    <Link href={item.href}>
                      <button className="text-3xl md:text-5xl font-bold">
                        {item.label}
                      </button>
                    </Link>
                  </SheetClose>
                )
            )}
          </div>

            <div className="flex justify-center gap-8 px-c1">
            <Link href={siteConfig.links.instagram}>
                    <Icons.instagram className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href={siteConfig.links.twitter}>
                    <Icons.twitter className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href={siteConfig.links.linkedin}>
                    <Icons.linkedin className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
            </div>

        </div>
      </SheetContent>
        </Sheet>
    );
};
