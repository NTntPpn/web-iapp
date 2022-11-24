import React from 'react'
import Image from 'next/image'
function our_services() {
  return (
    <div className='font-suk pt-[165px] bg-[#FAFAFA]'>
        <div className='w-screen h-auto px-[16px] md:px-[144px]'>
            <div className='text-[16px] md:text-[38px] font-medium md:font-semibold tracking-tighter'>
                บริการของเรา
            </div>
            <div className='w-full flex flex-wrap xl:flex-nowrap gap-[7px] md:gap-[38px] mt-[31px]'>

                <div className='w-[166px] md:w-[259px] h-[150px] md:h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[25px] md:mt-[40px] w-[46px] md:w-[71px] mx-auto'>
                        <Image src="/Group 825@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[20px] md:mt-[32px] text-[13px] md:text-[16px]'>
                        การพัฒนาระบบสื่อสารอัตโนมัติ ตามความต้องการ (AI API)
                    </div>
                </div>

                <div className='w-[166px] md:w-[259px] h-[150px] md:h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[25px] md:mt-[40px] w-[46px] md:w-[71px] mx-auto'>
                        <Image src="/Group 826@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[20px] md:mt-[32px] text-[13px] md:text-[16px]'>
                        AI API On Promis <br/>สามารถซื้อ API เป็นครั้ง
                    </div>
                </div>

                <div className='w-[166px] md:w-[259px] h-[150px] md:h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[25px] md:mt-[40px] w-[46px] md:w-[71px] mx-auto'>
                        <Image src="/Group 827@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[20px] md:mt-[32px] text-[13px] md:text-[16px]'>
                        AI API On Cloud <br/>สามารถซื้อ API ได้ทั้งหมด
                    </div>
                </div>

                <div className='w-[166px] md:w-[259px] h-[150px] md:h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[25px] md:mt-[40px] w-[46px] md:w-[71px] mx-auto'>
                        <Image src="/Group 828@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[20px] md:mt-[32px] text-[13px] md:text-[16px]'>
                        บริการพัฒนาระบบสื่อสาร<br/>อัตโนมัติ ของ AI
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default our_services