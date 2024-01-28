import { siteConfig } from "@/config/site.config";

import BlogBox from "./home/blogBox";

import MobileCarousel from "./home/mobileCarousel";

async function getPosts() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${siteConfig.notionID}`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();
  return posts;
}

export default async function Home(){

  const posts = await getPosts();

  return(
    <div>
      
      <div className="mt-5 hidden lg:block">
        <BlogBox blogs={posts.reverse()} />
      </div>

      <div className="mt-5 block lg:hidden">
         <MobileCarousel blogs={posts} />
      </div>

    </div>
  )

}