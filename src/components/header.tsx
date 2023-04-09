import styles from "@/styles/header.module.scss"
import { Logo } from "./logo"
import { Nav } from "./nav"

export function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
}
