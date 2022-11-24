import React from 'react'
import Image from "next/image"
function first() {
  return (
    <div className="w-screen h-auto pt-[71px] bg-[#FAFAFA]">
        <div className="md:flex md:flex-wrap px-[16px] md:px-[144px] gap-y-4">
            <div className="md:w-[31.5%] w-full  bg-first md:h-[447px] h-[112px] bg-cover rounded-lg justify-center text-center text-white font-suk px-[16px] md:px-0 grid grid-cols-2 md:grid-cols-none">
                <div>
                    <div className='w-[64px] md:w-[149px]  md:mx-auto md:pt-[33px] pt-[12px]'>
                        <Image src="/Group_78.svg" width={3000} height={3000} />
                    </div>
                    <div className='md:text-[20px] text-[14px] w-[200px] md:w-[273px] h-[58px] md:h-[83px]  md:mx-auto md:font-medium tracking-normal mt-[10px] md:mt-[22px] text-left md:text-center'> 
                        <div>แพลตฟอร์ม บริการด้าน</div>
                        <div>ปัญญาประดิษฐ์และระบบสื่อสาร</div>
                        <div>หุ่นยนต์ภาษาไทย</div>
                    </div>
                </div>
                <div className='text-right md:text-center pt-[16px] md:pt-0'>
                    <div className='w-auto h-auto md:h-[31px] font-thin text-[12px] md:text-[20px] md:mt-[28px]'>
                        ให้บริการ AI มากกว่า
                    </div>
                    <div className='w-auto h-auto md:h-[101px] font-medium tetx-[22px] md:text-[64px] shadow-[#43174BCC] mt-[9px] md:mt-[24px]'>
                        486,993
                    </div>
                    <div className='w-auto h-auto md:h-[31px] text-[12px] md:text-[20px] mt-[7px] md:mt-[24px]'>
                        ครั้ง
                    </div>
                </div>
                
            </div>
            <div className='w-[1.99%] h-auto hidden md:block'>

            </div>
            <div className='w-full md:w-[66.5%]  md:h-[447px] bg-cover rounded-lg snap overflow-auto flex scrollbar-hide mt-[8px] md:mt-[0px]'>
                <Image src="/E-KYC@2x.png" width={950} height={434}/>
                <Image src="/E-voting@2xf.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/Thai ID card@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/Book Bank OCR.@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/FACE VER.@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/Chat bot@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/ASR@2x.png" width={950} height={434} className="snap-normal snap-start"/>
                <Image src="/remove@2x.png" width={950} height={434} className="snap-normal snap-start"/>
            </div>
            <div className='w-full bg-third2 md:bg-third1 h-[112px] sm:h-[150px] md:h-[208px] bg-cover  mt-[24px] md:mt-0 rounded-lg'>

            </div>

        </div>

    </div>
  )
}

export default first


// public/Group 882@2x.png