import styles from "@/styles/footer.module.scss"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
        [ソーシャル]
      </div>
    </footer>
  )
}
