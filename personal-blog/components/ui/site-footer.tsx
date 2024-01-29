import Link from "next/link"

export default function SiteFooter() {

    return(
        <div className="mt-5 p-5">
            <div className="flex justify-center items-center italic">
                <div className="hover:scale-125 duration-300 ease-in-out">
                    <Link href="/">
                        by @CrimsonQuark17
                    </Link>
                </div>
            </div>
        </div>
    )

}