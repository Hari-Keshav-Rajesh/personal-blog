'use client'

import { siteConfig } from '@/config/site.config';

import {
    Card,
    CardContent,
  } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/components/ui/carousel';

import { Icons } from '@/config/icons';

import { formatDate } from '@/lib/formatDate';

import Image from 'next/image';

import Link from 'next/link';


export default function MobileCarousel({blogs}: any){

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
        <div className="flex flex-col justify-center items-center mt-c15 md:mt-c5 xl:mt-c3">
          <div>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    dragFree: true,
                    containScroll: 'trimSnaps',
                }}

                className="w-full md:w-c60 lg:w-c40 h-fit bg-opacity-70 shadow-md hover:bg-opacity-100 hover:shadow-lg text-center"
            >

                <CarouselContent>
                    {posts.map((post:any,index:number) => (
                        <CarouselItem 
                          key={post.id}
                        >
                            <Link href="/slug" as={`blog/${post.slug}`}>
                        <Card 
                        className="bg-inherit text-inherit h-fit w-fit bg-opacity-100 shadow-md duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg border-none" 
                        >
                          <CardContent className="p-8 bg-purple-900 bg-opacity-20 hover:bg-opacity-40">
                            <div className="flex flex-col gap-5">

                              <div>
                                <Image
                                  src={post.image_link}
                                  alt={post.title}
                                  width={400}
                                  height={400} 
                                  unoptimized={true}
                                />
                              </div>

                              <div className="flex flex-col text-left">
                                <div className="text-sm">{formatDate(post.date)}</div>
                                <div className="text-2xl font-bold">{post.title}</div>
                              </div>
                                
                              <div className='flex justify-between items-center'>
                                <div className="px-1 pb-0 pt-1">
                                {post.tags?.map((tag: any) => (
                                    <span
                                    key={tag}
                                    className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                                    >
                                    {tag}
                                    </span>
                                ))}
                                </div>
                                <div>
                                <Link href="/blog/slug" as={`blog/${post.slug}`}>
                                    <button 
                                    className='flex justify-center items-center
                                    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                                    >
                                        <div>Read More</div>
                                        <div>
                                            <Icons.arrowRight className='w-5 h-5' />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                              </div>

                              <div>
                                <div>{index+1}/{posts.length}</div>
                              </div>

                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            </div>
            <div className='text-sm font-light italic'>Swipe to see all</div>

        </div>
    )


}