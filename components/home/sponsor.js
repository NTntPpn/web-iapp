import React from 'react';
import Image from 'next/image';
function Sponsor() {
    return (
        <div className='w-screen h-[330px] md:h-[253px] bg-gradient-to-l from-[#4E65FF] to-[#DC56F5] font-suk justify-center text-center mt-[80px]'>
            <div className='w-[192px] h-[31px] text-[20px] mx-auto pt-[18px] md:pt-[57px] text-white'>
                ผู้สนับสนุน
            </div>
            <div className='md:flex gap-[30px] items-center justify-center pt-[16px] md:pt-[40px]'>
                <div className='w-[188px] md:w-[250px] mx-auto md:mx-0'>
                    <Image src="/Group 829@2x.png" width={250} height={100} />
                </div>
                <div className='w-[188px] md:w-[250px] mx-auto md:mx-0'>
                    <Image src="/Group 830@2x.png" width={250} height={100} />
                </div>
                <div className='w-[188px] md:w-[250px] mx-auto md:mx-0'>
                    <Image src="/Group 831@2x.png" width={250} height={100} />
                </div>            
            </div>
        </div>
    );
}

export default Sponsor;
