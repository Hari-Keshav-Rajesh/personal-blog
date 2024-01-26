import { navlinks } from "@/config/navlinks"

import { siteConfig } from "@/config/site.config"

import { Icons } from "@/config/icons"

import Link from "next/link"

import SiteSheet from "../site-sheet"

import { Avatar,AvatarFallback,AvatarImage } from "./avatar"


export default function SiteHeader(){

    return(
        <div className="block bg-purple-900 lg:bg-inherit">

            <div className=" hidden lg:flex justify-center gap-16 py-c2 ">
                <Link href={siteConfig.links.instagram}>
                    <Icons.instagram className="h-6 w-6 hover:scale-125" />
                </Link>
                <Link href={siteConfig.links.twitter}>
                    <Icons.twitter className="h-6 w-6 hover:scale-125" />
                </Link>
                <Link href={siteConfig.links.linkedin}>
                    <Icons.linkedin className="h-6 w-6 hover:scale-125" />
                </Link>
            </div>

            <div className="flex justify-between lg:hidden p-4">
                <div>
                    <Link href="/">
                    <Avatar className="w-10 h-10 md:w-48 md:h-48">
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>Stat</AvatarFallback>
                    </Avatar>
                    </Link>
                </div>
                <div>
                <SiteSheet />
                </div>
            </div>

            <div className="lg:block content-center px-c2 py-c6 lg:py-c2 lg:px-0 border-0 border-t-2 lg:border-t-0 border-b-2 lg:border-b-0 border-white">
                <div className="text-center font-bold text-5xl md:text-6xl lg:text-8xl p-2">
                    {siteConfig.title}
                </div>
            </div>

            <div className="hidden lg:flex justify-center gap-16 py-c2">
                {navlinks.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <div className="text-xl font-light hover:font-bold active:font-bold">
                            {link.label}
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )

}

