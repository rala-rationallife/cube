import Link from "next/link"
import styles from "@/styles/posts.module.scss"
import Image from "next/image"

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

type PostsProps = {
  posts: PostSummary[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.eachPost} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt={title}
                fill
                sizes="(min-width: 1166px) 555px, 50vw"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
                style={{ objectFit: "cover" }}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
