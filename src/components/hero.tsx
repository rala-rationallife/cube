type PropsType = {
  title: string
  subTitle: string
  imageOn?: boolean
}

export function Hero({ title, subTitle, imageOn }: PropsType) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}
