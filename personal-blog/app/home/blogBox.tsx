import {
    Card,
    CardContent,
  } from '@/components/ui/card';

import Image from 'next/image';

import { formatDate } from '@/lib/formatDate';

import Link from 'next/link';

import { Icons } from '@/config/icons';


export default function BlogBox({blogs}: {blogs: any[]}){

    const posts = blogs.slice(1,4);
    const post = blogs[0];

    return(
        <div className='mx-0 lg:mx-5 p-5 h-fit'>
            <div className="flex flex-col lg:flex-row gap-5">

                <div className='w-full lg:w-1/2'>
                    <Link href="/blog/slug" as={`blog/${post.slug}`}>
                    <Card className='bg-inherit text-inherit border-0'>
                        <CardContent className='bg-purple-900 bg-opacity-20'>

                            <div className="flex flex-col gap-10">

                            <div>
                            <Image className='p-5'
                            src={post.image_link}
                            alt={post.title}
                            width={600}
                            height={600}
                            />
                            </div>

                            <div className="flex flex-col">
                                <div className="text-sm lg:text-md">{formatDate(post.date)}</div>
                                <div className="text-2xl lg:text-4xl font-bold">{post.title}</div>
                            </div>

                            <div>
                                <p className="text-sm lg:text-lg">{post.description}</p>
                            </div>

                            <div className='flex justify-between'>
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
                        
                        </div>

                        </CardContent>
                    </Card>
                    </Link>
                </div>

                <div className='w-fit lg:w-1/2'>
                {posts.map((post:any)=>{
                        return(
                            <div 
                            className="flex flex-col gap-5 lg:gap-0" 
                            key={post.id}
                            >
                            <Link href="/slug" as={`blog/${post.slug}`}>
                              <Card 
                              className="bg-inherit text-inherit h-fit bg-opacity-100 shadow-md duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg border-none" 
                              >
                                <CardContent className="p-8 bg-purple-900 bg-opacity-20 hover:bg-opacity-40">
                                  <div className="flex flex-col lg:flex-row gap-5">
      
                                    <div>
                                      <Image
                                        src={post.image_link}
                                        alt={post.title}
                                        width={300}
                                        height={300} 
                                        unoptimized={true}
                                      />
                                    </div>
      
                                    <div className="flex flex-col justify-around">
                                      <div className="text-sm">{formatDate(post.date)}</div>
                                      <div className="text-2xl font-bold">{post.title}</div>
                                      
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

                                  </div>
      
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )

}