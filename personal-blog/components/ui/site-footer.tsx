import Link from "next/link"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Icons } from "@/config/icons"
  

export default function SiteFooter() {

    return(
        <div className="mt-5 p-10 pt-16 flex justify-center items-center italic">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Link href="https://github.com/Hari-Keshav-Rajesh/personal-blog">
                    <div className="flex items-center hover:scale-125 duration-300 ease-in-out">
                        <div>
                        <Icons.github className="w-8 h-8" />
                        </div>
                        <div>
                            by Hari Keshav Rajesh
                        </div>
                    </div>
                    </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-purple-900 text-inherit font-bold border-collapse">
                <p>
                    Site built on Nextjs and Tailwind CSS<br/>
                    Connected to Notion for content management<br/>
                    Hosted on Vercel<br/>
                    Click to visit the repository
                </p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>
    )

}