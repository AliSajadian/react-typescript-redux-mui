import { FC } from "react"


export const ConsoleLog: FC<{title: string, message: string | undefined}> = (title, message) => {
  return (
      <>{console.log(title, ': ', message)}</>
  )
}

