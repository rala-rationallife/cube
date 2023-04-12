import parse, { Element, DOMNode } from "html-react-parser"
import Image from "next/image"

export function ConvertBody({ contentHTML }: { contentHTML: string }) {
  const contentReact = parse(contentHTML, {
    replace: (node: DOMNode) => {
      if (node instanceof Element && node.name === "img") {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            src={src}
            width={parseInt(width)}
            height={parseInt(height)}
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
            style={{ width: "100%", height: "auto" }}
          />
        )
      }
      return null
    },
  })
  return <>{contentReact}</>
}
