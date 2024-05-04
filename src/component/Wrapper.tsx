import React from 'react'
import { cn } from '../lib/utils'

function Wrapper({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <section className={cn('  py-20 bg-white 2xl:px-40 lg:px-20 md:px-10 px-5',className)}>
            {children}
    </section>
  )
}

export default Wrapper