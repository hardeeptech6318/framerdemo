
import Marquee from 'react-fast-marquee'
import { IoIosStar } from "react-icons/io";
import Heading from './Heading';
import Wrapper from './Wrapper';

const reviews=[
    {
        name:"Emily Johnson",
        company:"Fast Agency ltd.",
        content:` I can't thank this team enough for their expertise
        and professionalism. From the initial consultation
        to the final product, they were attentive to my
        vision and added their creative touch to enhance
        it.`,
        start:5,
        img:"/images/review1.jpg"
    },
    {
        name:"Emily Johnson",
        company:"Fast Agency ltd.",
        content:` I can't thank this team enough for their expertise
        and professionalism. From the initial consultation
        to the final product, they were attentive to my
        vision and added their creative touch to enhance
        it.`,
        start:5,
        img:"/images/review1.jpg"
    },
    {
        name:"Emily Johnson",
        company:"Fast Agency ltd.",
        content:` I can't thank this team enough for their expertise
        and professionalism. From the initial consultation
        to the final product, they were attentive to my
        vision and added their creative touch to enhance
        it.`,
        start:5,
        img:"/images/review1.jpg"
    },
    {
        name:"Emily Johnson",
        company:"Fast Agency ltd.",
        content:` I can't thank this team enough for their expertise
        and professionalism. From the initial consultation
        to the final product, they were attentive to my
        vision and added their creative touch to enhance
        it.`,
        start:5,
        img:"/images/review1.jpg"
    },
]

function Testimonials() {
  return (
    
      <Wrapper className='bg-[#F5F5F5]'>
    
    <Heading title="Don't Just Take Our Word For It"/>
    <p className=' text-center mt-2 mb-10'>Discover why our clients choose us for impactful design solutions.</p>
    <div >
        <Marquee speed={150} style={{maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)"}}>
                {reviews.map((r)=>(
                    <div key={r.name} className='  mt-5 max-w-[350px] p-7 ml-5 rounded-3xl shadow-sm border'>
                          <div className=' flex gap-2 items-center '>{Array.from({ length:r.start }).map((_,i)=>(
                            <IoIosStar  key={i} className=' h-6 w-6 text-#f38744' fill='#f38744'/>
                          ))}</div>  

                          <p className='my-5'>
                            {r.content}
                          </p>

                          <div className=' flex items-center gap-2'>
                            <div>
                                <img src={r.img} className=' h-12 rounded-full w-12'/>
                            </div>
                            <div>
                            <div className=' font-semibold'>{r.name}</div>
                            <div className=' text-muted'> {r.company}</div>
                            </div> 
                          </div>
                    </div>
                ))}
        </Marquee>
    </div>
    </Wrapper>
    
  )
}

export default Testimonials