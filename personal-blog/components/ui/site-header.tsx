import { navlinks } from "@/config/navlinks"

import { siteConfig } from "@/config/site.config"

import { Icons } from "@/config/icons"

import Link from "next/link"

import SiteSheet from "../site-sheet"


export default function SiteHeader(){

    return(
        <div className="block">

            <div className=" hidden lg:flex justify-center gap-16 py-c2 ">
                <Link href={siteConfig.links.instagram}>
                    <Icons.instagram className="h-6 w-6" />
                </Link>
                <Link href={siteConfig.links.twitter}>
                    <Icons.twitter className="h-6 w-6" />
                </Link>
                <Link href={siteConfig.links.linkedin}>
                    <Icons.linkedin className="h-6 w-6" />
                </Link>
            </div>

            <div className="flex justify-between lg:block content-center px-c2 py-c6 lg:py-c2 lg:px-0">
                <div className="text-center font-bold text-4xl md:text-6xl lg:text-8xl">
                    This Is My Title
                </div>
                <SiteSheet />
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