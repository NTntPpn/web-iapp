import React from 'react';
import Image from 'next/image';
function Twosystem(){
    return (
        <div className='font-suk pt-[32px] md:pt-[165px] bg-[#FAFAFA]'>
        <div className='w-screen h-auto px-[16px] md:px-[144px]'>
            <div className='text-[16px] md:text-[38px] font-semibold font-suk'>
                มี 2 ระบบให้คุณเลือก           
            </div>
            <div className='grid xl:grid-cols-2 gap-[24px] mt-[24px]'>
                <div className='w-full md:w-[564px] h-[266px] md:h-auto border-[2px] border-[#4E65FF] rounded-xl relative p-[16px] md:p-[32px]'>
                    <div className='w-full text-center text-[#4E65FF] text-[20px] font-medium mt-[32px]'>
                        Face to Face
                    </div>
                    <div className='text-[16px] md:text-[20px] mt-[24px] md:mt-[32px] text-[#8C8C8C] tracking-tighter'>
                        สิ่งที่จะได้รับเมื่อเลือกซื้อระบบ Face to Face
                    </div>
                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mt-[4px] md:mt-[16px] mb-[8px]' >
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px] tracking-tight'>แอนดรอย์แอพลิเคชั่น สำหรับ Face to Face E-KYC</div>
                        
                    </div>
                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px]'>
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px]'>
                            <a className='text-red-400'>** </a>
                            คุณต้องเตรียมโทรศัพท์มือถือ / แท็บเล็ต แอนดรอยด์ ที่มีเครื่องอ่าน Passport NFC และDipchip ของบัตรประจำตัวประชาชน
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[564px] h-auto border-[2px] border-[#4E65FF] rounded-xl relative p-[16px] md:p-[32px]'>
                    <div className='w-full text-center text-[#4E65FF] text-[20px] font-medium mt-[32px]'>
                        Non Face to Face
                    </div>
                    <div className='text-[16px] md:text-[20px] mt-[24px] md:mt-[32px] text-[#8C8C8C] tracking-tighter'>
                        สิ่งที่จะได้รับเมื่อเลือกซื้อระบบ Non Face to Face
                    </div>

                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mt-[4px] md:mt-[16px] mb-[8px] tracking-tight'>
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px]'>
                            Native / IONIC / Flutter Mobile Plugin สำหรับการพัฒนาแอพพลิเคชั่น
                        </div>
                    </div>
                                        
                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mb-[8px]'>
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px]'>
                            Passport OCR & Verification
                        </div>
                    </div>
                                        
                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mb-[8px]'>
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px]'>
                            Face Verification
                        </div>
                    </div>
                                        
                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px] mb-[8px]'>
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px]'>
                            Active Liveness Face Check
                        </div>
                    </div>
                                        
                    <div className='text-[14px] md:text-[16px] font-extralight flex gap-[4px] md:gap-[8px]'>
                        <div className='w-[14px] h-[14px] md:w-[24px] md:h-[24px] pt-[3px] '>
                            <Image src="/e-voting/Icon ionic-ios-checkmark-circle-outline@2x.png" width={24} height={24}/>
                        </div>
                        <div className='w-[291px] md:w-[468px]'>
                            ระบบการดูแลหลังบ้าน
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Twosystem;
