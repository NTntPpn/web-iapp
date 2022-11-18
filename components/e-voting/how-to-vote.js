import React from 'react';
import Image from 'next/image';
function HowToVote(){
    return (
        <div className='font-suk pt-[165px] bg-[#FAFAFA]'>
        <div className='w-screen h-auto '>
            <div className='pl-[144px] text-[38px] font-semibold font-suk'>
                วิธีการลงคะแนนของเรา สามารถทำได้ดังนี้
            </div>
            <div className='px-[144px] w-full flex gap-[38px] mt-[24px]'>

                <div className='w-[368px] h-[229px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[16px] w-[168px] mx-auto'>
                        <Image src="/e-voting/Mail@2x.png" width={168} height={168}/>
                    </div>
                    <div className='text-[16px] text-[#4E65FF] mt-[16px]'>
                    Mail
                    </div>
                </div>

                <div className='w-[368px] h-[229px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[16px] w-[168px] mx-auto'>
                        <Image src="/e-voting/QR@2x.png" width={168} height={168}/>
                    </div>
                    <div className='text-[16px] text-[#4E65FF] mt-[16px]'>
                    QR Code
                    </div>
                </div>

                <div className='w-[368px] h-[229px] shadow-xl rounded-lg text-center justify-center'> 
                    <div className='mt-[16px] w-[168px] mx-auto'>
                        <Image src="/e-voting/SMS@2x.png" width={168} height={168}/>
                    </div>
                    <div className='text-[16px] text-[#4E65FF] mt-[16px]'>
                    SMS
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
    );
}

export default HowToVote;
