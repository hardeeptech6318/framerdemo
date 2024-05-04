import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import Heading from "./Heading"
import Bookbutton from "./BookButton"

const linkoption=[
    {
        title:"Our work",
        url:"/ourwork"
    },
    {
        title:"Features",
        url:"/features"
    },
    {
        title:"Services",
        url:"/services"
    },
    {
        title:"Pricing",
        url:"/pricing"
    },
    {
        title:"FAQs",
        url:"/faq"
    },
]

function Footer() {
  return (
    // fixed bottom-0 z-[-1]
    <footer className=" bg-black text-white px-5 md:px-20 lg:px-32 xl:px-52  py-20  w-full  ">
        {/* <h2 className=" text-6xl text-center"></h2>  */}
        <Heading title="Ready for Growth? Let's Talk"/>
        <div className=" flex items-center justify-center">
        {/* <button className="my-10  rounded-full bg-orange-500 py-1 px-5">Book a call</button> */}
        <Bookbutton text="Book a call" className=" my-10"/>
        </div>
        <div className=" flex items-center justify-between ">
            <div className=" flex gap-2 items-center"><img src="/images/logo.png" className=" rounded-full"/><span>PixelPulse</span></div>
            <div className=" lg:flex hidden items-center flex-1 gap-5 justify-center">
                {linkoption.map((l)=>(
                    <a href={l.url}>{l.title}</a>
                ))}
            </div>
            <div className=" hidden md:flex items-center gap-5">
                <BsTwitter/>
                <BsInstagram/>
                <BsLinkedin/>
                <BsYoutube/>
            </div>
        </div>
        <div className=" flex  lg:hidden flex-col md:flex-row gap-5  md:items-center py-10">
                {linkoption.map((l)=>(
                    <a href={l.url}>{l.title}</a>
                ))}
            </div>
            <div className="  flex md:hidden items-center gap-5">
                <BsTwitter/>
                <BsInstagram/>
                <BsLinkedin/>
                <BsYoutube/>
            </div>
    </footer>
  )
}

export default Footer