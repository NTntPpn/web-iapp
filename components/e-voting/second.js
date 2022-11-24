import React from 'react';
import Image from 'next/image';
function Second(){
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='relative w-full h-[352px] md:h-[752px] hidden md:block pt-[104px]'>
                <div className='md:absolute bg-evoting2  md:w-full h-[352px] md:h-full bg-cover bg-center font-suk  md:mt-0'>
                </div>
                <div className='w-full md:ml-[57.64%] md:pt-[303px] '>
                    <div className='text-[16px] md:text-[20px] font-semibold  w-auto h-auto mt-[4px] text-center md:text-left'>
                        ปลอดภัย เพราะบัตรเลือกตั้งของเรา<br/>มีการเข้ารหัส ที่แน่นหนาถึง
                    </div>
                    <div className='md:flex w-auto h-auto mt-[16px] text-center'>
                        <div className='text-[38px] font-semibold text-[#4E65FF]'>
                            148840               
                        </div>
                        <div className='text-[20px] font-semibold  w-auto h-auto pt-[11px] md:ml-[20px]'>
                            อักษร หรือ 48 หน้า
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden pt-[64px]'>
                <div className='w-full md:ml-[57.64%] md:pt-[303px] '>
                    <div className='text-[16px] md:text-[20px] font-semibold  w-auto h-auto mt-[4px] text-center md:text-left'>
                        ปลอดภัย เพราะบัตรเลือกตั้งของเรา<br/>มีการเข้ารหัส ที่แน่นหนาถึง
                    </div>
                    <div className='md:flex w-auto h-auto mt-[16px] text-center'>
                        <div className='text-[38px] font-semibold text-[#4E65FF]'>
                            148840               
                        </div>
                        <div className='text-[20px] font-semibold  w-auto h-auto pt-[11px] md:ml-[20px]'>
                            อักษร หรือ 48 หน้า
                        </div>
                    </div>
                </div>
                <div className='px-[16px] w-full h-[352px]'>
                    <Image src="/e-voting/E-Voting 1@2x.png" width={555} height={555}/>
                </div>
            </div>
        </div>
    );
}

export default Second;
