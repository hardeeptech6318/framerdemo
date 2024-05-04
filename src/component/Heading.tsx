import { cn } from "../lib/utils"


function Heading({title,className}:{title:string,className?:string}) {
  return (
    <h2 className={cn(' text-6xl text-center font-medium font-sans leading-none',className)}>{title}</h2>
  )
}

export default Heading