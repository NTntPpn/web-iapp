import React from 'react';
import Image from 'next/image';
function Third(){
    return (
        <div className='pt-[104px] font-suk bg-[#FAFAFA] hidden xl:block'>
            <div className='w-screen h-[378px] relative'>
                <div className='bg-evoting3 w-full h-full bg-cover bg-center font-suk'>
                </div>
                <div className='absolute top-[68px] left-[416px] text-center' >
                    <div className='mx-auto w-[158px] h-[120px]'>
                        <Image src="/e-voting/Group 18985@2x.png" width={158} height={120}/>
                    </div>
                    <div className='text-white text-[38px] font-medium w-auto h-auto -mt-[35px] shadow-black' >
                        รวดเร็วทันใจ<br/>ใช้เวาลาเพียงแค่ 3 นาทีในการนับคะแนน<br/>ต่อบัตรเลือกตั้ง 10,000 ใบ
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Third;
