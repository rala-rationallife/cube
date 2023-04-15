export type Category = {
  name: string
  id: string
  slug: string
}

export type CategoryProps = {
  name: string
  posts: PostSummary[]
}

export type Eyecatch = {
  url: string
  width: number
  height: number
  blurDataURL: string
}

export type PostSummary = {
  title: string
  slug: string
  eyecatch: Eyecatch
}
