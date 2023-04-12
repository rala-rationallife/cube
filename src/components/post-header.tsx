import styles from "@/styles/post-header.module.scss"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ConvertDate } from "./convert-date"

type Props = {
  title: string
  subTitle: string
  publishDate?: string
}

export function PostHeader({ title, subTitle, publishDate }: Props) {
  return (
    <div className={styles.stack}>
      <p className={styles.subTitle}>{subTitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publishDate && (
        <div className={styles.publishDate}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publishDate} />
        </div>
      )}
    </div>
  )
}
