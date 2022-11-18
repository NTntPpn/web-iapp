import React from 'react';
import Image from 'next/image';
function Br1(){
    return (
        <div className='font-suk pt-[128px] bg-[#FAFAFA] '>
            <div className='flex flex-wrap w-full md:px-[144px]'>
                <div className='w-[344px] h-[231px] md:w-[65.29%] md:h-auto  mx-auto md:mx-0'>
                    <div className='w-full h-[231px] md:h-[512px] border border-black' >

                    </div>
                </div>
                <div className='w-auto ml-[23px]'>
                    <div className='w-full h-[512px]' >
                        <div className='w-[360px] h-[512px]'>
                            <div className='w-[360px] h-[248px] border border-black'>
                            </div>
                            <div className='text-[20px] mt-[16px]'>
                                เนคเทค จับมือ หน่วยงานพันธมิตร ร่วมขับเคลื่อนแพลตฟอร์ม AI
                            </div>
                            <div className='text-[16px] font-extralight mt-[8px]'>
                                ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ (เนคเทค-สวทช.) จัดเสวนา AI FOR THAI ก้าวต่อไปสู่แพลตฟอร์ม AI แห่งชาติ ล่าสุด! ได้รับการสนับสนุนด้านทรัพยากร (resource) จากกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม
                            </div>
                            <div className='flex mt-[16px] text-[#8C8C8C]'>
                                <div>
                                    <Image src="/Group 833@2x.png" width={24} height={24}/>
                                </div>
                                <div>
                                    2 ว. |
                                </div>
                                <div className='ml-[12px]'>
                                    ไอแอพพ์ เทคโนโลยี
                                </div>
                                <div className='underline ml-auto mr-[16px]'>
                                    อ่านต่อ &gt;&gt; 
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Br1;
