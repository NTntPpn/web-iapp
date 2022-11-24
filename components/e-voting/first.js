import React from 'react';
import Image from 'next/image';
function First(){
    return (
        <div className='font-suk'>
        <div className='w-screen h-screen relative'>
            <div className='absolute top-0 left-0 z-[-10] lg:bg-f1evoting bg-f2evoting w-full h-full bg-cover bg-center font-suk'>
            </div>
            
            <div className='w-[420px] pt-[56px] lg:pt-[292px] text-center lg:text-left lg:ml-[62.78%] mx-auto'>
                <div className='text-[38px] w-[160px] h-[60px] mx-auto lg:mx-0'>E-Voting</div>
                <div className='font-extralight w-[269px] lg:w-[378px] h-auto mt-[4px] mx-auto lg:mx-0'>ระบบการเลือกตั้งที่มีความแม่นยำสูงและ มีการรักษาความปลอดภัยของการโหวดที่ดีเยี่ยมและ มีความสามารถในการประมวนผลที่รวดเร็ว</div>
                <div className='w-[170px] h-[26px] mt-[16px] mx-auto lg:mx-0'>ติดต่อใช้ระบบ E-Voting</div>
                <div className='lg:flex mt-[4px]'>
                    <div className='w-[40px] h-[40px] rounded-full border border-[#4E65FF] mx-auto lg:mx-0'>
                    </div>
                    <div className='lg:block hidden ml-[8px]'>
                        <div className="items-center flex flex-row-reverse w-[40px] h-[40px] rounded-full border border-[#4E65FF] hover:text-[#4E65FF] hover:w-auto hover:before:content-['02-051-2453/02-329-5997/086-322-5858'] duration-500 hover:px-[8px] mx-auto md:mx-0 mt-[8px] md:mt-0 ">
                            <Image src="/e-voting/Icon ionic-ios-call@2x.png" className='mr-[5px]' width={25} height={25}/>
                        </div>
                    </div>
                        
                    <div className='flex border border-[#4E65FF] w-[342px] px-[16px] lg:hidden h-[40px] rounded-full pt-[8px] mt-[8px] mx-auto'>
                        <div className='w-[25px] h-[25px]'>
                            <Image src="/e-voting/Icon ionic-ios-call@2x.png" className='mr-[5px]' width={25} height={25}/>
                        </div>
                        <div className='w-full md:w-auto ml-[4px] text-[#4E65FF] tracking-tight lg:tracking-normal text-[14px] lg:text-[16px] lg:mx-0'>
                                02-051-2453/02-329-5997/086-322-5858
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default First;
