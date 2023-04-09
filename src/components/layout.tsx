import * as React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}
