import * as React from "react"
import styles from "@/styles/container.module.scss"

export function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.default}>{children}</div>
}
