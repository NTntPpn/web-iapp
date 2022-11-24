import React from 'react';
import Image from 'next/image';
function HowToVote(){
    return (
        <div className='font-suk pt-[16px] md:pt-[165px] bg-[#FAFAFA] px-[16px] md:px-[144px]'>
            <div className='w-full h-auto '>
                <div className='text-[16px] md:text-[38px] font-semibold font-suk'>
                    วิธีการลงคะแนนของเรา สามารถทำได้ดังนี้
                </div>
                <div className='w-full flex flex-wrap md:flex-nowrap gap-[14px] md:gap-[36px] mt-[16px] md:mt-[24px]'>
                    <div className='w-full md:w-[368px] h-[213px] md:h-[229px] shadow-xl rounded-lg text-center justify-center bg-white'> 
                        <div className='mt-[16px] w-[149px] md:w-[168px] mx-auto'>
                            <Image src="/e-voting/Mail@2x.png" width={168} height={168}/>
                        </div>
                        <div className='text-[16px] text-[#4E65FF] mt-[7px] md:mt-[16px]'>
                            Mail
                        </div>
                    </div>

                    <div className='w-[164px] h-[104px] md:w-[368px] md:h-[229px] shadow-xl rounded-lg text-center justify-center bg-white'> 
                        <div className='mt-[2px] md:mt-[16px] w-[72px] md:w-[168px] mx-auto'>
                            <Image src="/e-voting/QR@2x.png" width={168} height={168}/>
                        </div>
                        <div className='text-[16px] text-[#4E65FF] mt-[2px] md:mt-[16px]'>
                            QR Code
                        </div>
                    </div>

                    <div className='w-[164px] h-[104px] md:w-[368px] md:h-[229px] shadow-xl rounded-lg text-center justify-center bg-white'> 
                        <div className='mt-[2px] md:mt-[16px] w-[72px] md:w-[168px] mx-auto'>
                            <Image src="/e-voting/SMS@2x.png" width={168} height={168}/>
                        </div>
                        <div className='text-[16px] text-[#4E65FF] mt-[2px] md:mt-[16px]'>
                            SMS
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default HowToVote;
