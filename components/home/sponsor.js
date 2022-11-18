import React from 'react';
import Image from 'next/image';
function Sponsor() {
    return (
        <div className='w-screen h-[253px] bg-gradient-to-l from-[#4E65FF] to-[#DC56F5] font-suk justify-center text-center mt-[80px]'>
            <div className='w-[192px] h-[31px] text-[20px] mx-auto pt-[57px] text-white'>
                ผู้สนับสนุน
            </div>
            <div className='flex gap-[30px] justify-center pt-[40px]'>
                <div className='w-[210px] h-[76px] border border-black'>
                </div>
                <div className=''>
                    <Image src="/Group 917@2x.png" width={250} height={100} />
                </div>
                <div className=''>
                    <Image src="/Group 918@2x.png" width={250} height={100} />
                </div>            
            </div>
        </div>
    );
}

export default Sponsor;
