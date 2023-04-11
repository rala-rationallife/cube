import styles from "@/styles/footer.module.scss"
import { Logo } from "./logo"
import { Container } from "./container"
import { Social } from "./social"

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
