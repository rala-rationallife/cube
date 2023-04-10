import { Container } from "@/components/container"
import { Hero } from "@/components/hero"
import { Meta } from "@/components/meta"

export default function Blog() {
  return (
    <>
      <Meta />

      <Container>
        <Hero title="Blog" subTitle="Recent Posts" />
      </Container>
    </>
  )
}
