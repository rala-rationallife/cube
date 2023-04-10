import styles from "@/styles/footer.module.scss"
import { Logo } from "./logo"
import { Container } from "./container"

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  )
}
