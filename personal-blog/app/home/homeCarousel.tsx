'use client'

import { siteConfig } from '@/config/site.config';

import Autoplay from 'embla-carousel-autoplay';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/components/ui/carousel';

import { formatDate } from '@/lib/formatDate';

import Link from 'next/link';


export default function HomeCarousel({blogs}: any){

    const posts = blogs.filter((post:any)=> post.featured===true); 

    if (posts.length === 0) {
        return (
          <div className="mt-c15 md:mt-c5 xl:mt-c3">
            <div className="text-center text-xl">
              No Events Available. Please Check Again Later
            </div>
          </div>
        );
    }

    return(
        <div className="mt-c15 md:mt-c5 xl:mt-c3">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    dragFree: true,
                }}
                plugins={[
                    Autoplay({
                    delay: 2000,
                    }),
                ]}
                className="w-full lg:w-c30 h-fit bg-opacity-70 shadow-md hover:bg-opacity-100 hover:shadow-lg text-center"
            >

                <CarouselContent>
                    {posts.map((post:any) => (
                        <CarouselItem key={post.id}>
                            <Card className="h-fit bg-cover border-none" style={{ backgroundImage: `url(${post.image_link})` }}>
                            <div className="inset-0 bg-black bg-opacity-5"></div>
                                <CardHeader>
                                    <CardTitle>{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm">{formatDate(post.date)}</div>
                                    <div className="text-sm">{post.author}</div>
                                    <div className="pb-0 pt-2">
                                        {post.tags?.map((tag: any) => (
                                            <span
                                            key={tag}
                                            className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-5 py-1 text-sm font-semibold text-gray-700"
                                            >
                                            {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className='flex justify-center items-center'>
                                    <Link href="/blog/[slug]" as={`blog/${post.slug}`}>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore</button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
        

}