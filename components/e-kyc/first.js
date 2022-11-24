import React from 'react';
import Image from 'next/image';
function First(){
    return (
        <div className='font-suk'>
        <div className='w-screen h-screen relative'>
            <div className='absolute top-0 left-0 z-[-10] lg:bg-ekyc1 bg-ekyc2 w-full h-full bg-cover bg-center font-suk'>
            </div>
            
            <div className='w-[420px] pt-[56px] lg:pt-[292px] text-center lg:text-left lg:ml-[62.78%] mx-auto'>
                <div className='text-[38px] w-[160px] h-[60px] mx-auto lg:mx-0'>E-KYC</div>
                <div className='font-extralight w-[269px] lg:w-[378px] h-auto mt-[4px] mx-auto lg:mx-0'>ระบบเปรียบเทียบใบหน้าจากรูป Selfie กับ รูปบัตรประชาชน<br className='hidden md:block'/>หรือพาสปอร์ต สำหรับการยืนยันตัวตน</div>
                <button className="w-[154px] h-[42px] rounded-full bg-[#4E65FF] text-white mt-[40px] md:mt-[24px]">
                        ทดลองระบบฟรี!
                </button>
            </div>
        </div>
        </div>
        // <div className=' font-suk'>
        //     <div className='w-screen h-screen relative'>
        //         <div className='bg-ekyc2 md:bg-ekyc1 w-full h-full bg-cover bg-center font-suk'>
        //         </div>
        //         <div className='absolute top-[56px] md:top-[311px] left-[53px] md:left-[904px] text-center md:text-left'>
        //             <div className='text-[38px] font-semibold w-auto h-auto'>
        //                 E-KYC
        //             </div>
        //             <div className='text-[16px] font-extralight md:w-auto h-auto mt-[4px] w-[269px]'>
        //                 ระบบเปรียบเทียบใบหน้าจากรูป Selfie กับ รูปบัตรประชาชน<br className='hidden md:block'/>หรือพาสปอร์ต สำหรับการยืนยันตัวตน                    
        //             </div>
                    // <button className="w-[154px] h-[42px] rounded-full bg-[#4E65FF] text-white mt-[40px] md:mt-[24px]">
                    //     ทดลองระบบฟรี!
                    // </button>
        //         </div>

        //     </div>
        // </div>
    );
}

export default First;
