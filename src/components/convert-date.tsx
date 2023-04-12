import { format, parseISO } from "date-fns"
import ja from "date-fns/locale/ja"

export function ConvertDate({ dateISO }: { dateISO: string }) {
  return (
    <time>
      {format(parseISO(dateISO), "yyyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  )
}
