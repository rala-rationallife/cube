import { Container } from "@/components/container"
import { ConvertBody } from "@/components/convert-body"
import { Meta } from "@/components/meta"
import { Pagination } from "@/components/pagination"
import { PostBody } from "@/components/post-body"
import { PostCategories } from "@/components/post-categories"
import { PostHeader } from "@/components/post-header"
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column"
import { Post, Slug, getAllSlugs, getPostBySlug } from "@/lib/api"
import { eyecatchLocal } from "@/lib/constants"
import { extractText } from "@/lib/extract-text"
import { prevNextPost } from "@/lib/prev-next-post"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

export default function Post({
  title,
  publishDate,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}: Post) {
  return (
    <>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width.toString()}
        pageImgH={eyecatch.height.toString()}
      />

      <Container>
        <article>
          <PostHeader
            title={title}
            subTitle="Blog Article"
            publishDate={publishDate}
          />

          <figure>
            <Image
              src={eyecatch.url}
              alt=""
              width={eyecatch.width}
              height={eyecatch.height}
              sizes="(min-width: 1166px) 1166px, 100vw"
              style={{ width: "100%", height: "auto" }}
              priority
              placeholder="blur"
              blurDataURL={eyecatch.blurDataURL}
            />
          </figure>

          <TwoColumn>
            <TwoColumnMain>
              <PostBody>
                <ConvertBody contentHTML={content} />
              </PostBody>
            </TwoColumnMain>
            <TwoColumnSidebar>
              <PostCategories categories={categories} />
            </TwoColumnSidebar>
          </TwoColumn>

          <Pagination
            prevText={prevPost.title}
            prevUrl={`/blog/${prevPost.slug}`}
            nextText={nextPost.title}
            nextUrl={`/blog/${nextPost.slug}`}
          />
        </article>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs?.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<Post>> {
  // resPromise.then((res) => console.log(res)).catch((err) => console.log(err))

  // try {
  //   const res = await resPromise
  //   console.log(res)
  // } catch (err) {
  //   console.log(err)
  // }

  if (!context.params) {
    throw new Error("Missing context parameters.")
  }

  const slug = context.params.slug

  if (typeof slug !== "string") {
    throw new Error("Slug must be a string.")
  }

  const post = await getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  } else {
    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()

    let prevPost: Slug = { title: "", slug: "" }
    let nextPost: Slug = { title: "", slug: "" }

    if (allSlugs) {
      ;[prevPost, nextPost] = prevNextPost(allSlugs, slug)
    } else {
      console.error("Failed to fetch all slugs.")
    }

    return {
      props: {
        title: post.title,
        publishDate: post.publishDate,
        content: post.content,
        eyecatch,
        categories: post.categories,
        description,
        prevPost,
        nextPost,
      },
    }
  }
}
