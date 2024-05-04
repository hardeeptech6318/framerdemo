

import Faq from './component/Faq'
import Features from './component/Features'
import Footer from './component/Footer'
import Home from './component/Home'
import MarqueTag from './component/MarqueTag'
import Navbar from './component/Navbar'
import Pricing from './component/Pricing'
import Services from './component/Services'
import Testimonials from './component/Testimonials'

function App() {
  

  return (
    <>
    <Navbar/>
   <Home/>
   <MarqueTag/>
   <Features/>
   <Services/>
   <Pricing/>
   <Faq/>
   <Testimonials/>
   {/* <div className='h-[400px] z-[-2] relative'/> */}
   <Footer/>
   </>
  )
}

export default App
