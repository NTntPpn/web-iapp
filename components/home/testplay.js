import React from 'react';
import Image from 'next/image';
function Testplay() {
    return (
        <div className='h-auto bg-[#FAFAFA] font-suk px-[144px] pt-[87px]'>
            <div className='flex   text-center h-[60px]'>
                <Image src="/Group 822@2x.png" width={64} height={64}/>
                <div className='text-[38px] ml-[17px] font-semibold'>ทดลองเล่น Thai Text To Speech</div>
                <div className='text-[16px] ml-auto mt-[16px] text-right  font-light h-[60px]'>ดูเพิ่มเติม &gt;&gt; </div>
            </div>
            <div className='flex mt-[32px]'>
                    <div className='flex text-center'>
                        <div className='w-[24px] h-[24px] rounded-full bg-gradient-to-bl from-[#4E65FF] to-[#DC56F5] text-center text-white text-[14px] my-auto'>1</div>
                        <div className='text-[20px] ml-[8px]'>เลือกเสียงที่ต้องการ</div>
                    </div>
                    <div className='flex text-center ml-[292px]'>
                        <div className='w-[24px] h-[24px] rounded-full bg-gradient-to-bl from-[#4E65FF] to-[#DC56F5] text-center text-white text-[14px] my-auto'>2</div>
                        <div className='text-[20px] ml-[8px]'>ทดลองสร้างเสียง</div>
                    </div>
            </div>
            <div className='flex mt-[16px]'>
                <div className=''>
                    <div className='w-[176px] h-[176px] '>
                        <Image src="/Group 906@2x.png" width={176} height={176}/>
                    </div>
                    <div>
                        <input type="radio" className='text-[14px] tracking-tight'/><a className='text-[14px] tracking-tight '> น้องไข่ต้ม (เสียงเด็กผู้ชาย)</a> 
                    </div>
                </div>
                
                <div className='ml-[24px]'>
                    <div className='w-[176px] h-[176px] '>
                        <Image src="/Group 905@2x.png" width={176} height={176}/>
                    </div>
                    <div>
                        <input type="radio"/> <a className='text-[14px] tracking-tight'>ซี ฉัตรปวีณ์ ตรีชัชวาลวงศ์</a>
                    </div>
                </div>
                <div className='w-[671px] h-[207px] border border-[#4E65FF] rounded-lg ml-[104px] relative'>
                    <div>
                        <input type="textarea" 
                            name="textValue"
                            className='w-full h-auto bg-inherit rounded-lg pl-[24px] pt-[20px]'
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
    );
}

export default Testplay;
