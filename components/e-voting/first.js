import React from 'react';
import Image from 'next/image';
function First(){
    return (
        <div className='pt-[47px] font-suk'>
            <div className='w-screen h-screen relative'>
                <div className='bg-evoting w-full h-full bg-cover bg-center font-suk'>
                </div>
                <div className='absolute top-0'>
                    <div className='text-[38px] font-semibold w-auto h-auto'>
                        E-Voting
                    </div>
                    <div className='text-[16px] font-light w-auto h-auto'>
                        ระบบการเลือกตั้งที่มีความแม่นยำสูงและ มีการรักษาความ<br/>ปลอดภัยของการโหวดที่ดีเยี่ยมและ มีความสามารถในการ<br/>ประมวนผลที่รวดเร็ว
                    </div>
                    <div className='text-[16px] font-semibold w-auto h-auto'>
                        ติดต่อใช้ระบบ E-Voting                
                    </div>
                    <div className='flex'>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default First;
