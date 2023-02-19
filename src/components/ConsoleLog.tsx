import { FC } from "react"


const ConsoleLog: FC<{title: string, message: string | undefined}> = (title, message) => {
  return (
      <>{console.log(title, ': ', message)}</>
  )
}

export default ConsoleLog;