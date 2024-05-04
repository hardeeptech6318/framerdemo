import { CiCircleCheck } from "react-icons/ci";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

const price=[
    {
        title:"Starter",
        price:"999",
        feature:[
            "Pause / cancel anytime",
            "Dedicated project manager",
            "Easy to manage design requests",
            "1 request at the time",
            "24/7 Priority Support",
            "Framer Development",
            "SEO Marketing",
            "2 Weeks Delivery ",
        ],
        spot:2,
        color:'white'
    },
    {
        title:"Premium",
        price:"2499",
        feature:[
            "Pause / cancel anytime",
            "Dedicated project manager",
            "Easy to manage design requests",
            "2 request at the time",
            "24/7 Priority Support",
            "Framer Development",
            "SEO Marketing",
            "1 Week Delivery ",
        ],
        spot:1,
        color:"orange"
    }
]

function Pricing() {
  return (
    
        <Wrapper className="bg-[#FAFAFA]">
        
        <Heading title="Pick Your Design Power-Up"/>
        <p className=" text-center mb-10 my-2">Scale your design potential with the right plan.</p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
            {price.map((p)=>(
                <div key={p.title} className={` border shadow-sm rounded-2xl p-5 ${p.title==='Premium' ? 'bg-orange-100/50':"bg-white"}`}>
                    <div className=" text-white bg-black rounded-full w-fit px-5 py-1 text-sm">{p.title}</div>
                    <div className=" flex items-center my-10"><span className=" text-6xl font-bold">${p.price}</span><span className=" text-3xl">/mo</span></div>
                    <div className=" flex flex-col gap-3    ">
                        {p.feature.map((f)=>(
                            <span className=" flex gap-2 items-center"><span className=" text-white rounded-full bg-orange-500 p-2"><CiCircleCheck /></span><span>{f}</span></span>
                        ))}
                    </div>
                    <button className=" rounded-full py-2 px-5 bg-orange-500 w-full mt-5 text-white ">Subscribe</button>
                    <p className=" text-center mt-2">{p.spot} Spots available</p>
                </div>
            ))}

        </div>
        </Wrapper>

    
  )
}

export default Pricing