import styles from "@/styles/hero.module.scss"

type PropsType = {
  title: string
  subTitle: string
  imageOn?: boolean
}

export function Hero({ title, subTitle, imageOn }: PropsType) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}
