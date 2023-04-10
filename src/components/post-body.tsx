import * as React from "react"
import styles from "@/styles/post-body.module.scss"

export function PostBody({ children }: { children: React.ReactNode }) {
  return <div className={styles.stack}>{children}</div>
}
