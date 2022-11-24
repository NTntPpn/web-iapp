import React from 'react'
import Image from 'next/image'
function feature() {
  return (
    <div className='font-suk pt-[165px] bg-[#FAFAFA]'>
        <div className='w-screen h-auto '>
            <div className='px-[16px] md:px-[144px] text-[16px] md:text-[38px] font-semibold font-suk'>
                Feature
            </div>
            <div className='px-[16px] md:px-[144px] w-full flex flex-wrap  md:gap-[38px] mt-[31px]'>

                <div className='w-[169px] h-[154px] md:w-[259px] md:h-[224px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[14px] md:mt-[24px] w-[80px] md:w-[110px] mx-auto'>
                        <Image src="/ekyc/Biometric Identification@2x.png" width={1100} height={1140}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[10px] md:mt-[28px] text-[13px] md:text-[16px] '>
                        Biometric Identification
                    </div>
                </div>

                <div className='w-[169px] h-[154px] md:w-[259px] md:h-[224px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[14px] md:mt-[24px] w-[67px] md:w-[92px] mx-auto'>
                        <Image src="/ekyc/Group 18706@2x.png" width={92} height={112}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[10px] md:mt-[28px] text-[13px] md:text-[16px] '>
                    Hybrid Liveness Detection
                    </div>
                </div>

                <div className='w-[169px] h-[154px] md:w-[259px] md:h-[224px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[16px] w-[140px] md:w-[193px] mx-auto'>
                        <Image src="/ekyc/Group 18728@2x.png" width={193} height={114}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[10px] md:mt-[28px] text-[13px] md:text-[16px] '>
                        Document<br className='md:block hidden'/>Authenticity Checking
                    </div>
                </div>

                <div className='w-[169px] h-[154px] md:w-[259px] md:h-[224px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[24px] w-[110px] md:w-[163px] mx-auto'>
                        <Image src="/ekyc/Group 18730@2x.png" width={163} height={107}/>
                    </div>
                    <div className='px-[8px] md:px-[24px] mt-[10px] md:mt-[28px] text-[13px] md:text-[16px] '>
                        Self-Service,<br className='block md:hidden'/>Anywhere Anytime
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default feature