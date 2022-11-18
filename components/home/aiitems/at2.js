import React from 'react'
import Image from 'next/image'
function ph2() {
  return (
    <div className='w-[232px]'>
      <div className='w-[216px] h-[328px] rounded-md font-suk drop-shadow-lg bg-white'>
            <Image src="/Untitled-1@2x.png" width={216} height={216}/>
            <div className='text-[14px] h-[22px] mt-[11px] w-full px-[12px] tracking-tight'>Remove Background</div>
            <div className='text-[14px] font-light h-[40px] mt-[1px] px-[12px] tracking-normal'>ระบบลบพื้นหลัง สำหรับการตกแต่งรูปติดบัตร (ตัดหัวใส่เสื้อ)</div>
            <div className='text-[12px] text-right text-[#8C8C8C] font-light h-[19px] mt-[2px] px-[16px]'>ดูเพิ่มเติม &gt;&gt; </div>
        </div>
    </div>
    
  )
}

export default ph2