"use client"

import { siteConfig } from "@/config/site.config"

import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ({ post }:{post:any}) => {
  const disqusShortname = "personal-blog-page"
  const disqusConfig = {
    url: `${siteConfig.url}/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;