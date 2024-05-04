import Marquee from "react-fast-marquee";


function MarqueTag() {
  return (
    <section className="bg-white">
    <Marquee speed={150} className=" pt-10  " style={{maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)"}}>
             
            <img src="/images/part11.png" className="   h-[360px]  rounded-xl"  />

            
            <img src="/images/part12.png" className="  h-[360px]  mx-5 rounded-xl"/>
            <img src="/images/part13.png" className="  h-[360px]  rounded-xl"/>
            <img src="/images/part14.png" className="  h-[360px]  mx-5 rounded-xl"/>
        
    </Marquee>

    <Marquee  className=" mt-10" direction="right" speed={150} style={{maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)"}}>
            
            <img src="/images/part21.png" className="  h-[360px]  rounded-xl"  />

            
            <img src="/images/part22.png" className="  h-[360px]  mx-5 rounded-xl"/>
            <img src="/images/part23.png" className="  h-[360px]  rounded-xl"/>
            <img src="/images/part24.png" className="  h-[360px]  mx-5 rounded-xl"/>
        
    </Marquee>
    </section>
  )
}

export default MarqueTag