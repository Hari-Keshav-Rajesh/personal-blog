import { siteConfig } from "@/config/site.config"

import Link from "next/link";

import { formatDate } from "@/lib/formatDate";

import Image from "next/image";

import {
    Card,
    CardContent,
  } from '@/components/ui/card';

  async function getPosts() {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/table/${siteConfig.notionID}`,
      { next: { revalidate: 60 } }
    );
    const posts = await res.json();
    return posts;
  }

export default async function Blog(){

    const posts: any = await getPosts();

    return (
        <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
          <div className="text-4xl font-bold">Latest Updates</div>
    
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
            {posts && posts.length > 0 ? (
              posts
                .filter((post: any) => {
                  return post.published ? post : null;
                })
                .reverse()
                .map((post: any) => {
    
    
                  return (
                    <div className="mt-c5" key={post.id}>
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

                              <div className="flex flex-col">
                                <div className="text-sm">{formatDate(post.date)}</div>
                                <div className="text-2xl font-bold">{post.title}</div>
                              </div>
                                
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
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  );
                })
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
      );
    }



  