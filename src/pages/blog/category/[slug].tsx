import { Container } from "@/components/container"
import { PostHeader } from "@/components/post-header"
import { getAllCategories } from "@/lib/api"
import { Category, CategoryProps } from "@/lib/types"
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"

export default function Category({ name }: Category) {
  return (
    <Container>
      <PostHeader title={name} subTitle="Blog Category" />
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

  return {
    props: {
      name,
    },
  }
}
