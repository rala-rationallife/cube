import styles from "@/styles/hero.module.scss"
import cube from "@/images/cube.jpg"
import Image from "next/image"

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
      {imageOn && (
        <figure>
          <Image
            src={cube}
            alt=""
            sizes="(min-width: 1166px) 634px, (min-width: 768px) 50vw, 100vw"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </figure>
      )}
    </div>
  )
}
