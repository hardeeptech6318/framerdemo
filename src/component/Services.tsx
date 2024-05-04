import { MdMonitor } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { PiStarFourBold } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import Heading from "./Heading";
import Bookbutton from "./BookButton";
import { cn } from "../lib/utils";
import Wrapper from "./Wrapper";

const services=[
    {
       title:"Web Design",
       icon:MdMonitor,
       content:"we craft user-centric designs that elevate your online presence – from lightning-fast e-commerce sites to sleek, informative landing pages." 
    },
    {
        title:"Mobile Design",
        icon:CiMobile1,
        content:"Mobile designs that are as beautiful as they are effective. We optimize every pixel for seamless navigation, boosting engagement and driving conversions across all devices." 
     },
     {
        title:"No Code Development",
        icon:ImPower ,
        content:"Even if you're not a coding whiz, Framer lets you build amazing things. We'll handle the technical side, so you can focus on designing solutions that supercharge your startup." 
     },
     {
        title:"Brand Design",
        icon:PiStarFourBold,
        content:"From first impressions to lasting loyalty, we'll craft a brand identity that speaks to your ideal customer. With logos, style guides, and stunning visuals, we'll make sure your startup stands out." 
     },
]

function Services() {
  return (
    
        <Wrapper>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2">
            <div  className=" ">
                {/* <h2 className=" text-6xl font-medium">Choose Your <br/> Design Adventure</h2> */}
                <div className="md:sticky top-20">
                <Heading className="  text-start" title="Choose Your  Design Adventure"/>
                <p className=" pb-5 pt-2 ">Your design partner for web, mobile, and brand success.</p>  
                {/* <button className=" bg-orange-500 px-5 py-2 rounded-full text-white">Book a call</button>   */}
                <Bookbutton className="" text="Book a call"/>
                </div>
            </div>
            <div className=" ">
                {services.map((serv,i)=>(
                    <div key={i} className={cn("  md:sticky  bg-white   border shadow-md p-5 rounded-3xl mt-5 w-full   lg:w-[542px] h-[295px]",`z-${i}`)} style={{top:`${(i+1)*60}px`}}>
                        <div className=" flex items-center gap-2  font-sans font-semibold mb-5  "><span className=" text-white rounded-full p-2 bg-orange-500">{<serv.icon/>}</span><span className=" text-xl">{serv.title}</span></div>
                        <div className=" text-muted  font-sans font-medium">{serv.content}</div>
                    </div>
                ))}
            </div>
        </div>
        </Wrapper>

    
  )
}

export default Services