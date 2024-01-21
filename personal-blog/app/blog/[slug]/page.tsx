import { NotionRenderer } from "react-notion";

import Link from "next/link";

import { Icons } from "@/config/icons";

import { siteConfig } from "@/config/site.config";

import "@/lib/styles.css";

import { formatDate } from "@/lib/formatDate";

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
            <Link href="/blog">
                <div className="mt-5 flex items-center px-0 text-base font-medium text-muted-foreground transition-colors hover:text-foreground/80 xl:px-c8">
                <Icons.arrowLeft className="h-5 w-5" />
                <div>Back to Blog</div>
                </div>
            </Link>

            <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
            <div className="mb-14 flex flex-col gap-4">
            <div className="text-md font-medium">{formatDate(post.date)}</div>
            <div className="text-4xl font-bold">{post.title}</div>
            </div>

            <div>
            <NotionRenderer blockMap={blocks} />
            </div>
      </div>

        
        </>
    )

};