import { Layout } from "@/components/layout"
import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "nprogress/nprogress.css"
import NProgress from "nprogress"
import { Router } from "next/router"

config.autoAddCss = false

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
