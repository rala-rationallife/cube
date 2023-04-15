import { createClient } from "microcms-js-sdk"

export type Post = {
  title: string
  publishDate: string
  content: string
  eyecatch: {
    url: string
    width: number
    height: number
    blurDataURL: string
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
  description: string
  prevPost: Slug
  nextPost: Slug
}

export type Slug = {
  title: string
  slug: string
}

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
        blurDataURL: "",
      },
      categories: [],
      description: "",
      prevPost: {
        title: "",
        slug: "",
      },
      nextPost: {
        title: "",
        slug: "",
      },
    }
  }
}

export async function getAllSlugs(limit = 100): Promise<Slug[] | undefined> {
  try {
    const slugs = await client.get<{
      contents: Slug[]
    }>({
      endpoint: "blogs",
      queries: {
        fields: "title,slug",
        orders: "-publishDate",
        limit,
      },
    })
    return slugs.contents
  } catch (err) {
    console.log("~~ getAllSlugs ~~")
    console.log(err)
    return undefined
  }
}

export async function getAllPosts(
  limit = 100,
): Promise<PostSummary[] | undefined> {
  try {
    const posts = await client.get<{ contents: PostSummary[] }>({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log("~~ getAllPosts ~~")
    console.log(err)
  }
}
