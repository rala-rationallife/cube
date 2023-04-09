import Link from "next/link"
import { siteMeta } from "@/lib/constants"

const { siteTitle } = siteMeta

export function Logo() {
  return <Link href="/">{siteTitle}</Link>
}
