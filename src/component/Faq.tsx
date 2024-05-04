
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./Accordian"
import Heading from "./Heading"
import Wrapper from "./Wrapper"

  const faqcontent=[
    {
    question:"What types of design services do you offer?",
    answer:"From brand identity development to website design, we offer a comprehensive range of design services tailored to meet your needs. Whether you're launching a new business or rebranding an existing one, we're here to help bring your vision to life."
    },
    {
        question:"How do you approach the design process?",
        answer:"Our design process is collaborative and transparent. We start by understanding your goals, target audience, and brand personality. Then, we create initial concepts for your feedback and iterate until we reach the perfect solution. Our aim is to ensure that the final design not only looks great but also effectively communicates your message and resonates with your audience."
    },
    {
        question:"What sets your agency apart from others?",
        answer:"At our agency, we blend creativity with strategy to deliver designs that not only look visually stunning but also drive results. Our team consists of experienced designers who stay updated with the latest design trends and technologies to provide innovative solutions. We prioritize communication, reliability, and delivering projects on time and within budget."
    },
    {
        question:"Do you work with clients internationally?",
        answer:"Yes, we work with clients from all around the globe. Thanks to modern communication technologies, we can collaborate effectively with clients regardless of their location. Whether you're based locally or internationally, we're dedicated to providing the same level of high-quality service and attention to detail."
    },
    {
        question:"Can you help with ongoing design needs after the initial project is completed?",
        answer:"Absolutely! We believe in building long-term relationships with our clients. Once your initial project is completed, we're here to support you with any ongoing design needs you may have, whether it's updating your website, creating new marketing materials, or evolving your brand as your business grows. "
    },
  ]

function Faq() {
  return (
    // <section className=" px-32 py-10 bg-white">
      <Wrapper>
        
        <Heading title="Got Questions? We've Got Answers."/>
        <p className=" text-center py-4">Everything you need to know about the product and billing.</p>
        <div >
        <Accordion type="single" collapsible className="w-full flex flex-col gap-5 mt-5">
            {faqcontent.map((f)=>(
                <AccordionItem key={f.question} value={f.question} className=" shadow-sm px-5 py-1 rounded-md ">
        <AccordionTrigger>{f.question}</AccordionTrigger>
        <AccordionContent>
          {f.answer}
        </AccordionContent>
      </AccordionItem>
            ))}
      
      
    </Accordion>
        </div>
        </Wrapper>
    // </section>
  )
}

export default Faq