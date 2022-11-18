import React from 'react'
import Image from "next/image"
function first() {
  return (
    <div className="w-screen h-auto pt-[64px] bg-[#FAFAFA]">
        <div className="md:flex md:flex-wrap px-[144px] gap-y-4">
            <div className="w-[31.5%]  bg-first h-[447px] bg-cover rounded-lg justify-center text-center text-white font-suk">
                <div className='w-[149px] mx-auto pt-[33px]'>
                  <Image src="/Group_78.svg" width={149} height={29} />
                </div>
                <div className='text-[20px] w-[273px] h-[83px] mx-auto font-medium tracking-normal mt-[22px]'> 
                  <div>แพลตฟอร์ม บริการด้าน</div>
                  <div>ปัญญาประดิษฐ์  และระบบสื่อสาร</div>
                  <div>หุ่นยนต์ภาษาไทย</div>
                </div>
                <div className='w-auto h-[31px] font-thin text-[20px] mt-[28px]'>
                  ให้บริการ AI มากกว่า
                </div>
                <div className='w-auto h-[101px] font-medium text-[64px] shadow-[#43174BCC] mt-[24px]'>
                  486,993
                </div>
                <div className='w-auto h-[31px] text-[20px] mt-[24px]'>
                  ครั้ง
                </div>
            </div>
            <div className='w-[1.99%] h-auto'>

            </div>
            <div className='w-[66.5%]  h-[447px] bg-cover rounded-lg snap overflow-auto flex scrollbar-hide'>
                <Image src="/E-KYC@2x.png" width={950} height={434}/>
                <Image src="/E-voting@2xf.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/Thai ID card@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/Book Bank OCR.@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/FACE VER.@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/Chat bot@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/ASR@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/remove@2x.png" width={950} height={434} className="snap-normal snap-start"/>
            </div>
            <div className='w-full bg-third h-[208px] bg-cover rounded-lg'>

            </div>

        </div>

    </div>
  )
}

export default first


// public/Group 882@2x.png