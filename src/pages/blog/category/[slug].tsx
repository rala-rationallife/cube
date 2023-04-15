import { Container } from "@/components/container"
import { PostHeader } from "@/components/post-header"
import { Posts } from "@/components/posts"
import { getAllCategories, getAllPostsByCategory } from "@/lib/api"
import { eyecatchLocal } from "@/lib/constants"
import { CategoryProps } from "@/lib/types"
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"
import { getPlaiceholder } from "plaiceholder"

export default function Category({ name, posts }: CategoryProps) {
  return (
    <Container>
      <PostHeader title={name} subTitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const allCats = await getAllCategories()
  if (!allCats) {
    throw new Error("Failed to fetch categories.")
  }

  const paths = allCats?.map(({ slug }) => `/blog/category/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<CategoryProps>> {
  const catSlug = context.params?.slug

  if (typeof catSlug !== "string") {
    throw new Error("Slug must be a string.")
  }

  const allCats = await getAllCategories()

  const cat = allCats?.find(({ slug }) => slug === catSlug)
  if (!cat) {
    return {
      notFound: true,
    }
  }

  const { name } = cat

  const posts = (await getAllPostsByCategory(cat.id)) || []

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = { ...eyecatchLocal, blurDataURL: "" }
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name,
      posts,
    },
  }
}
