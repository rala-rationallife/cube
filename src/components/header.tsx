import styles from "@/styles/header.module.scss"
import { Logo } from "./logo"
import { Nav } from "./nav"
import { Container } from "./container"

export function Header() {
  return (
    <header>
      <Container>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
