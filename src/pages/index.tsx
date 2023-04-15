import { Container } from "@/components/container"
import { Hero } from "@/components/hero"
import { Meta } from "@/components/meta"
import { eyecatchLocal, siteMeta } from "@/lib/constants"
import { GetStaticPropsResult } from "next"
import * as React from "react"
import { BlogProps } from "./blog"
import { getAllPosts } from "@/lib/api"
import { getPlaiceholder } from "plaiceholder"
import { Posts } from "@/components/posts"
import { Pagination } from "@/components/pagination"

const { siteTitle, siteDesc } = siteMeta

export default function Home({ posts }: BlogProps): React.ReactElement {
  return (
    <>
      <Meta />

      <Container>
        <Hero title={siteTitle} subTitle={siteDesc} imageOn />

        <Posts posts={posts} />
        <Pagination nextUrl="/blog" nextText="More Posts" />
      </Container>
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogProps>
> {
  const posts = (await getAllPosts(4)) || []

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = { ...eyecatchLocal, blurDataURL: "" }
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts,
    },
  }
}
