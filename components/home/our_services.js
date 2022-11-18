import React from 'react'
import Image from 'next/image'
function our_services() {
  return (
    <div className='font-suk pt-[165px] bg-[#FAFAFA]'>
        <div className='w-screen h-auto '>
            <div className='pl-[144px] text-[38px] font-semibold font-suk'>
                บริการของเรา
            </div>
            <div className='px-[144px] w-full flex gap-[38px] mt-[31px]'>

                <div className='w-[259px] h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[40px] w-[71px] mx-auto'>
                        <Image src="/Group 825@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[24px] mt-[32px] text-[16px]'>
                        การพัฒนาระบบสื่อสารอัตโนมัติ ตามความต้องการ (AI API)
                    </div>
                </div>

                <div className='w-[259px] h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[40px] w-[71px] mx-auto'>
                        <Image src="/Group 826@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[24px] mt-[32px] text-[16px]'>
                        AI API On Promis <br/>สามารถซื้อ API เป็นครั้ง
                    </div>
                </div>

                <div className='w-[259px] h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[40px] w-[71px] mx-auto'>
                        <Image src="/Group 827@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[24px] mt-[32px] text-[16px]'>
                        AI API On Cloud <br/>สามารถซื้อ API ได้ทั้งหมด
                    </div>
                </div>

                <div className='w-[259px] h-[229px] border border-[#4E65FF] rounded-lg text-center justify-center'> 
                    <div className='mt-[40px] w-[71px] mx-auto'>
                        <Image src="/Group 828@2x.png" width={71} height={71}/>
                    </div>
                    <div className='px-[24px] mt-[32px] text-[16px]'>
                        บริการพัฒนาระบบสื่อสาร<br/>อัตโนมัติ ของ AI
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default our_services