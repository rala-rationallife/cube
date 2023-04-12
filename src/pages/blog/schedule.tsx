import { Container } from "@/components/container"
import { Post, getPostBySlug } from "@/lib/api"

export default function Schedule({
  title,
  publishDate,
  content,
  eyecatch,
  categories,
}: Post) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
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
          width: 1280,
          height: 960,
        },
        categories: [],
      },
    }
  }

  return {
    props: {
      title: post.title,
      publishDate: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}