import * as React from "react"
import { Container } from "@/components/container"
import { Hero } from "@/components/hero"
import { Meta } from "@/components/meta"
import { Posts } from "@/components/posts"
import { getAllPosts } from "@/lib/api"
import { GetStaticPropsResult } from "next"
import { eyecatchLocal } from "@/lib/constants"
import { getPlaiceholder } from "plaiceholder"

type Eyecatch = {
  url: string
  width: number
  height: number
  blurDataURL: string
}

type PostSummary = {
  title: string
  slug: string
  eyecatch: Eyecatch
}

export type BlogProps = {
  posts: PostSummary[]
}

export default function Blog({ posts }: BlogProps): React.ReactElement {
  return (
    <>
      <Meta />

      <Container>
        <Hero title="Blog" subTitle="Recent Posts" />

        <Posts posts={posts} />
      </Container>
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogProps>
> {
  const posts = (await getAllPosts()) || []

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
