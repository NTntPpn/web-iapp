import React from 'react'
import Image from 'next/image'
function ph3() {
  return (
    <div className='w-[168px] md:w-[232px]'>
      <div className='w-[168px] md:w-[216px] h-[294px] md:h-[328px] rounded-md font-suk drop-shadow-lg bg-white'>
            <Image src="/Group 894@2x.png" width={1000} height={1000}/>
            <div className='text-[14px] h-auto md:h-[22px] mt-[11px] w-full px-[12px] tracking-tight'>E-KYC</div>
            <div className='text-[14px] font-light h-auto md:h-[40px] mt-[1px] px-[12px] tracking-tight'>ระบบเปรียบเทียบใบหน้าจากรูป Selfie และรูปบัตรประชาชน</div>
            <div className='text-[12px] text-right text-[#8C8C8C] font-light h-[19px] mt-[2px] px-[16px] hidden md:block'>ดูเพิ่มเติม &gt;&gt; </div>

        </div>
    </div>
  )
}

export default ph3