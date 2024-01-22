import { siteConfig } from "@/config/site.config";

import HomeCarousel from "./home/homeCarousel"

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
      <HomeCarousel blogs={posts} />
    </div>
  )

}