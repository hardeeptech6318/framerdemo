import { FaRegChessQueen } from "react-icons/fa6";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import ChatBubble from "./ChatBubble";

function Features() {
  return (
    
        <Wrapper className="bg-[#FAFAFA]">
        
         <Heading title="The Design Advantage Your Startup's Been Missing: Partnering for Startup Success "/>
         <div className=" grid xl:grid-cols-2 grid-cols-1  gap-5 mt-10">
            <div className=" rounded-3xl p-5 border shadow-sm bg-white ">
                <h3 className=" text-xl font-medium flex items-center gap-3"><span className=" bg-orange-500 p-2 rounded-full text-white"><FaRegChessQueen  /></span><span>Stand-Out Design Solutions</span></h3>
                <p className=" mb-5 mt-2">Custom design that fuels your startup's growth and sets you apart.</p>
                <div className=" flex justify-center items-center bg-[#FAFAFA] rounded-3xl pt-10 h-[414px] ">
                    <img src="/images/designstandout.svg"/>
                </div>

            </div>

            
            <div className=" rounded-3xl p-5 border shadow-sm bg-white">
                <h3 className=" text-xl font-medium flex items-center gap-3"><span className=" bg-orange-500 p-2 rounded-full text-white"><FaRegChessQueen  /></span><span>Stand-Out Design Solutions</span></h3>
                <p className=" mb-5 mt-2">Custom design that fuels your startup's growth and sets you apart.</p>
                
                <div className="   relative bg-[#FAFAFA]   rounded-3xl pt-10 h-[414px]">
                    <img src="/assests/traffic.svg" className=" absolute left-0 top-5"/>
                    <img src="/assests/twelve.svg" className=" absolute right-0  bottom-0   "/>
                </div>

            </div>


            <div className=" rounded-3xl p-5 border shadow-sm bg-white">
                <h3 className=" text-xl font-medium flex items-center gap-3"><span className=" bg-orange-500 p-2 rounded-full text-white"><FaRegChessQueen  /></span><span>Stand-Out Design Solutions</span></h3>
                <p className=" mb-5 mt-2">Custom design that fuels your startup's growth and sets you apart.</p>
                <div className=" flex justify-center relative items-center bg-[#FAFAFA] rounded-3xl pt-10 h-[414px]">
                    <img src="/assests/computer.svg" />
                    <img src="/assests/photoshop.svg"  className=" md:top-20  md:left-36 top-10 left-20 absolute"  />
                    <img src="/assests/figma.svg" className=" md:top-20 md:right-36 top-10 right-20 absolute"/>
                    <img src="/assests/google.svg" className="  md:top-48 md:left-20 top-48 sm:left-10 left-5  absolute"/>
                    <img src="/assests/ball.svg" className=" md:top-48 md:right-20 top-48 sm:right-10 right-5  absolute"/>
                    <img src="/assests/framer.svg" className=" md:bottom-10 md:left-36 bottom-10 left-20 absolute"/>
                    <img src="/assests/ai.svg" className=" md:bottom-10 md:right-36 bottom-10  right-20 absolute"/>
                </div>

            </div>


            <div className=" rounded-3xl p-5 border shadow-sm bg-white">
                <h3 className=" text-xl flex font-medium items-center gap-3"><span className=" bg-orange-500 p-2 rounded-full text-white"><FaRegChessQueen  /></span><span>Stand-Out Design Solutions</span></h3>
                <p className=" mb-5 mt-2">Custom design that fuels your startup's growth and sets you apart.</p>
                <div className=" flex justify-center relative items-center bg-[#FAFAFA] rounded-3xl pt-10 h-[414px]">
                    <ChatBubble/>
                </div>

            </div>


        </div>   


        
        </Wrapper>

    
  )
}

export default Features