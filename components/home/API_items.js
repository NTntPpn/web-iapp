import React from 'react'
import At1 from './aiitems/at1'
import At2 from './aiitems/at2'
import At3 from './aiitems/at3'
import At4 from './aiitems/at4'
import At5 from './aiitems/at5'
function ai_items() {
  return (
    
            <div className='w-screen h-auto bg-[#FAFAFA] pt-[69px]'>
            <div className='pl-[16px] md:pl-[144px] text-[16px] md:text-[38px] font-semibold font-suk'>
                API ยอดฮิต
            </div>
            <div className='px-[16px] md:px-[144px] w-full flex flex-wrap xl:flex-nowrap mt-[8px] md:mt-0 gap-[7px] md:gap-[3px]'>
                <At1/>
                <At2/>
                <At3/>
                <At4/>
                <At5/>
            </div>
        </div>
  )
}

export default ai_items