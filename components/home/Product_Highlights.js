import React from 'react'
import Ph1 from './phitems/ph1'
import Ph2 from './phitems/ph2'
import Ph3 from './phitems/ph3'
import Ph4 from './phitems/ph4'
import Ph5 from './phitems/ph5'
function Product_Highlights() {
  return (  
    <div className='w-screen h-auto bg-[#FAFAFA] pt-[69px]'>
    <div className='pl-[16px] md:pl-[144px] text-[16px] md:text-[38px] font-semibold font-suk'>
        Product Highlights
    </div>
    <div className='px-[16px] md:px-[144px] w-full flex flex-wrap xl:flex-nowrap mt-[8px] md:mt-0 gap-[7px] md:gap-[3px]'>
        <Ph1/>
        <Ph2/>
        <Ph3/>
        <Ph4/>
        <Ph5/>
    </div>
    </div>
  )
}

export default Product_Highlights