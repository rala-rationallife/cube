import styles from "@/styles/contact.module.scss"
import { Social } from "./social"

export function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.email.address</address>
    </div>
  )
}
