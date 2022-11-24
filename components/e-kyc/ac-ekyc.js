import React from 'react';
import Image from 'next/image';
function AcEkyc() {
    return (
        <div className='font-suk pt-[32px] md:pt-[165px] bg-[#FAFAFA]'>
        <div className='w-screen h-auto px-[16px] md:px-[144px]'>
            <div className='text-[16px] md:text-[38px] font-semibold font-suk'>
                ความแม่นยำของ E-KYC            
            </div>
            <div className='grid xl:grid-cols-2 gap-[24px]'>
                <div className='w-[344px] md:w-[564px] h-[420px] md:h-[612px] shadow-xl rounded-xl relative'>
                    <div className='w-[564]'>
                        <Image src="/ekyc/Passport@2x.png" width={564} height={114}/>
                    </div>
                        <div className='px-[19px] md:px-[32px]'>
                            <div className='text-[16px] md:text-[20px] mt-[24px] md:mt-[32px]'>
                                ขั้นตอนการตรวจสอบความถูกต้อง
                            </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mt-[4px] md:mt-[16px] mb-[8px]' >
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    จับภาพของบุคคลโดยใช้ OCR
                                </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px]'>
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    ตรวจสอบข้อมูลความถูกต้องจาก ชิป E-passport
                                </div>

                                <div className='text-[16px] md:text-[20px] mt-[16px] md:mt-[32px]'>
                                    วิธีการตรวจความถูกต้อง
                                </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mt-[4px] md:mt-[16px] mb-[8px]' >
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    ตรวจสอบความถูกต้องของเอกสาร DSC และ CRL
                                </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mb-[8px]'>
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    การตรวจจับใบหน้า (รูปถ่าย Selfie)
                                </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] md:tracking-tight tracking-normal'>
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px]'>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    การจดจำใบหน้า (ใช้ภาพจาก Data จากชิปผ่าน<br className='md:hidden'/>หน้าจริง และชิปกับภาพถ่าย)
                                </div>
                        </div>
                    <div className='absolute w-[123px] h-[51px] md:w-[200px] md:h-[86px] bg-gradient-to-r from-[#DC56F5] to-[#4E65FF] rounded-r-full  text-white top-[32px]'>
                        <div className='mt-[9px] font-extralight pl-[15px] md:pl-[25px] text-[8px] md:text-[16px]'>
                            ความแม่นยำในการอ่าน
                        </div>
                        <div className='text-[22px] md:text-[38px] mt-[-5px] md:mt-[-10px] pl-[25px] md:pl-[41px] font-medium'>
                            98.89%
                        </div>
                    </div>
                </div>

                <div className='w-[344px] md:w-[564px] h-[420px] md:h-[612px] shadow-xl rounded-xl relative'>
                    <div className='w-[564]'>
                        <Image src="/ekyc/Passport@2x.png" width={564} height={114}/>
                    </div>
                        <div className='px-[19px] md:px-[32px]'>
                            <div className='text-[16px] md:text-[20px] mt-[24px] md:mt-[32px]'>ขั้นตอนการตรวจสอบความถูกต้อง</div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mt-[4px] md:mt-[16px] mb-[8px]' >
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    รูปแบบของบัตรประชาชน
                                </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] tracking-tighter'>
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    ตรวจสอบข้อมูลกับ DOPA (สมารถทำหรือไม่ทำก็ได้)
                                </div>

                            <div className='text-[16px] md:text-[20px] mt-[24px] md:mt-[32px]'>วิธีการตรวจความถูกต้อง</div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mt-[4px] md:mt-[16px] mb-[8px]' >
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    การตรวจจับใบหน้า (รูปถ่าย Selfie)
                                </div>
                                <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] tracking-tighter'>
                                    <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                                        <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                                    </div>
                                    การจดจำใบหน้า (ใบหน้าบนบัตรประชาชนกับ รูปถ่าย<br className='md:hidden'/>Selfie ของเรา)
                                </div>
                        </div>
                    <div className='absolute w-[123px] h-[51px] md:w-[200px] md:h-[86px] bg-gradient-to-r from-[#DC56F5] to-[#4E65FF] rounded-r-full  text-white top-[32px]'>
                        <div className='mt-[9px] font-extralight pl-[15px] md:pl-[25px] text-[8px] md:text-[16px]'>
                            ความแม่นยำในการอ่าน
                        </div>
                        <div className='text-[22px] md:text-[38px] mt-[-5px] md:mt-[-10px] pl-[25px] md:pl-[41px] font-medium'>
                            98.89%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default AcEkyc;
