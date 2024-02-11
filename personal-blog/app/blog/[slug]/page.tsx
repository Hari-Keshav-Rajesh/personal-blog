import { NotionRenderer } from "react-notion";

import Link from "next/link";

import { Icons } from "@/config/icons";

import { siteConfig } from "@/config/site.config";

import "@/lib/styles.css";

import { formatDate } from "@/lib/formatDate";
import DisqusComments from "@/components/comment-box";

async function getPosts() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${siteConfig.notionID}`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();
  return posts;
}

async function getBlocks({ params: { slug } }: { params: { slug: any } }) {
    const posts = await getPosts();
  
    const post = posts.find((t: any) => t.slug === slug);
  
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`);
    const blocks = await res.json();
  
    return {
      post,
      blocks,
    };
}

async function generateStaticParams() {
    const posts = await getPosts();
    const paths = posts.map((row: any) => `/${row.slug}`);
    return paths;
}

export default async function BlogPost({
    params,
  }: {
    params: { slug: string };
  }){

    const paths = await generateStaticParams();
    
    const {slug} = params;

    const {post,blocks} = await getBlocks({ params: { slug: slug } });

    return(
        <>

            <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">

            <div className="mb-14 flex flex-col gap-6">
              <div className="text-4xl font-bold">{post.title}</div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
                <div className="flex">
                  <div><Icons.calendar className="w-8 h-8"/></div>
                  <div className="text-lg font-medium">{formatDate(post.date)}</div>
                </div> 
                <div className="flex">
                  <div><Icons.clock className="w-8 h-8"/></div>
                  <div className="text-lg font-medium">{post.read_time}</div>
                </div>
              </div>
            </div>

            <div>
            <NotionRenderer blockMap={blocks} />
            </div>

            <div className="mt-16">
              <DisqusComments post={post} />
            </div>

            <Link href="/blog">
                <div className="mt-5 flex items-center pt-2 text-base font-light hover:font-bold">
                <Icons.arrowLeft className="h-5 w-5" />
                <div>Back to Blog</div>
                </div>
            </Link>
      </div>

        
        </>
    )

};