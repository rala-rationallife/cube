import * as React from "react"
import styles from "@/styles/two-column.module.scss"

export function TwoColumn({ children }: { children: React.ReactNode }) {
  return <div className={styles.flexContainer}>{children}</div>
}

export function TwoColumnMain({ children }: { children: React.ReactNode }) {
  return <div className={styles.main}>{children}</div>
}

export function TwoColumnSidebar({ children }: { children: React.ReactNode }) {
  return <div className={styles.sidebar}>{children}</div>
}
