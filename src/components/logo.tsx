import Link from "next/link"
import { siteMeta } from "@/lib/constants"
import styles from "@/styles/logo.module.scss"

const { siteTitle } = siteMeta

export function Logo({ boxOn }: { boxOn?: boolean }) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      {siteTitle}
    </Link>
  )
}
