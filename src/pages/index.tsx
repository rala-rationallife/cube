import { Container } from "@/components/container"
import { Hero } from "@/components/hero"
import { Meta } from "@/components/meta"
import { siteMeta } from "@/lib/constants"

const { siteTitle, siteDesc } = siteMeta

export default function Home() {
  return (
    <>
      <Meta />

      <Container>
        <Hero title={siteTitle} subTitle={siteDesc} imageOn />
      </Container>
    </>
  )
}
