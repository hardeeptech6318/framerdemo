import { BsArrowRight } from "react-icons/bs"
import { cn } from "../lib/utils"


function Bookbutton({text,className}:{text:string,className?:string}) {
  return (
    <button className={cn(" flex gap-3 items-center  px-5 py-2 text-white bg-orange-500 rounded-full group ",className)}><span>{text}</span><BsArrowRight className="hidden transform opacity-0 group-hover:opacity-100 group-hover:block transition duration-500 ease-in-out"/></button>
  )
}

export default Bookbutton