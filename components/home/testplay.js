import React from 'react';
import Image from 'next/image';
function Testplay() {
    return (
        <div className='h-auto bg-[#FAFAFA] font-suk px-[16px] md:px-[144px] pt-[34px] md:pt-[87px]'>
            <div className='flex'>
                <div className='flex w-[30px] md:w-[64px] h-[30px] md:h-[64px]'>
                    <Image src="/Group 822@2x.png" width={100} height={100}/>
                </div>
                <div className='text-[16px] md:text-[38px] ml-[8px] md:ml-[17px] font-medium md:font-semibold tracking-tighter'>
                    ทดลองเล่น Thai Text To Speech
                </div>
                <div className='text-[13px] ml-auto md:mt-[16px] text-right  font-light md:h-[60px] tracking-tighter'>ดูเพิ่มเติม &gt;&gt; </div>
            </div>
            <div className='grid md:grid-cols-2 md:mt-[32px] mt-[25px]'>
                <div>
                    <div className='flex text-center'>
                        <div className='w-[24px] h-[24px] rounded-full bg-gradient-to-bl from-[#4E65FF] to-[#DC56F5] text-center text-white text-[14px] my-auto'>1</div>
                        <div className='text-[20px] ml-[8px]'>เลือกเสียงที่ต้องการ</div>
                    </div>
                    <div className='flex mt-[17px]'>
                        <div className=''>
                            <div className='md:w-[176px] md:h-[176px] w-[160px] h-[160px] '>
                                <Image src="/Group 906@2x.png" width={176} height={176}/>
                            </div>
                            <div>
                                <input type="radio"/><a className='text-[13px] md:text-[14px] tracking-tighter font-light'> น้องไข่ต้ม (เสียงเด็กผู้ชาย)</a> 
                            </div>
                        </div>
                        
                        <div className='ml-[24px]'>
                            <div className='md:w-[176px] md:h-[176px] w-[160px] h-[160px]'>
                                <Image src="/Group 905@2x.png" width={176} height={176}/>
                            </div>
                            <div>
                                <input type="radio"/> <a className='text-[13px] md:text-[14px] tracking-tighter font-light'>ซี ฉัตรปวีณ์ ตรีชัชวาลวงศ์</a>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div>
                    <div className='flex text-left mt-[25px] md:mt-0'>
                        <div className='w-[24px] h-[24px] rounded-full bg-gradient-to-bl from-[#4E65FF] to-[#DC56F5] text-center text-white text-[14px] my-auto'>2</div>
                        <div className='text-[20px] ml-[8px]'>ทดลองสร้างเสียง</div>
                    </div>
                    <div className='w-full h-[120px] md:h-[207px] border border-[#4E65FF] rounded-lg relative mt-[17px]' >
                        <div>
                            <input type="textarea" 
                                name="textValue"
                                className='w-full h-auto bg-inherit rounded-lg pl-[12px] md:pl-[24px] pt-[20px]'
                                placeholder='สวัสดีพวกเราไอแอพพ์ เทคโนโลยี ยินดีให้บริการ'
                            />
                            <div className='w-[48px] h-[48px] rounded-full bg-gradient-to-bl from-[#4E65FF] to-[#DC56F5] text-center text-white text-[14px] absolute bottom-[24px] right-[24px]'>
                                <div className="p-2">
                                    <Image src="/Group 723@2x.png" width={31} height={31} />
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
                    
                    
            </div>
        </div>
    );
}

export default Testplay;
