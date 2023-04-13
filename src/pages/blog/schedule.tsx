import { Container } from "@/components/container"
import { ConvertBody } from "@/components/convert-body"
import { Meta } from "@/components/meta"
import { PostBody } from "@/components/post-body"
import { PostCategories } from "@/components/post-categories"
import { PostHeader } from "@/components/post-header"
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column"
import { Post, getPostBySlug } from "@/lib/api"
import { extractText } from "@/lib/extract-text"
import Image from "next/image"

export default function Schedule({
  title,
  publishDate,
  content,
  eyecatch,
  categories,
  description,
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
        </article>
      </Container>
    </>
  )
}

export async function getStaticProps(): Promise<{ props: Post }> {
  // resPromise.then((res) => console.log(res)).catch((err) => console.log(err))

  // try {
  //   const res = await resPromise
  //   console.log(res)
  // } catch (err) {
  //   console.log(err)
  // }

  const slug = "schedule"

  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      props: {
        title: "",
        publishDate: "",
        content: "",
        eyecatch: {
          url: "",
          width: 0,
          height: 0,
        },
        categories: [],
        description: "",
      },
    }
  }

  const description = extractText(post.content)

  return {
    props: {
      title: post.title,
      publishDate: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description,
    },
  }
}
