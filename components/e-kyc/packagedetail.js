import React from 'react';
import Image from 'next/image';
function Packagedetail() {
    return (
        <div className='font-suk pt-[23px] md:pt-[104px] bg-[#FAFAFA]'>
            <div className='w-screen h-auto px-[16px] md:px-[144px]'>
                <div className='grid md:grid-cols-2'>
                    <div>
                        <Image src="/ekyc/Group 18734@2x.png" width={576} height={400}/>
                    </div>
                    <div className='md:text-left text-center'>
                        <div className='h-[205px] pt-[8px] md:pt-[100px] md:pl-[33px]'>
                            <div className='text-[16px] md:text-[38px] font-medium'>
                                รายละเอียดของ Package
                            </div>
                            <div className='text-[14px] md:text-[16px] text-[#595959] mt-2 md:marker:mt-0'>
                                Full Complete Pipeline Service
                            </div>
                            <div className='text-[14px] md:text-[16px]'>
                                50 บาท* / ลูกค้าใหม่ E-KYC หนึ่งราย<br/>ขั้นต่ำ: 800 ลูกค้าใหม่ต่อเดือน
                            </div>
                            <button className='w-full md:w-[154px] h-[42px] text-white bg-[#4E65FF] rounded-full mt-6 md:mt-[32px]'>
                                ทดลองระบบฟรี!
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default Packagedetail;
