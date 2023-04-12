import { createClient } from "microcms-js-sdk"

export type Post = {
  title: string
  publishDate: string
  content: string
  eyecatch: {
    url: string
    width: number
    height: number
  }
  categories: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
    slug: string
  }[]
}

export const client = createClient({
  serviceDomain: `${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}`,
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
})

export async function getPostBySlug(slug: string): Promise<Post> {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log("~~ getPostBySlug ~~")
    console.log(err)
    return {
      title: "",
      publishDate: "",
      content: "",
      eyecatch: {
        url: "",
        width: 0,
        height: 0,
      },
      categories: [],
    }
  }
}
