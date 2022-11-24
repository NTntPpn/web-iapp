import React from 'react';
import Image from 'next/image';
import Cus1 from './itemcus.js/cus1';
import Cus2 from './itemcus.js/cus2';
import Cus3 from './itemcus.js/cus3';
function Customer()  {
    return (
        <div className='font-suk justify-center text-center bg-[#FAFAFA] pt-[32px] md:pt-[180px] z-40'>
            <div className='text-[16px] md:text-[38px] ml-[8px] md:ml-[17px] font-medium md:font-semibold tracking-tighter'>
                ลูกค้าของเรา
            </div>
            <div className='mt-2 md:mt-[50px]'>
                <Cus1/>
                <Cus2/>
                <Cus3/>
            </div>
            <div className='text-[20px] w-auto h-auto font-semibold mt-[124px]'>
                ได้รับการรับรองจาก
            </div>
            <div className='flex gap-[18px] md:gap-[30px] justify-center pt-[25px]'>
                <div className='w-[119px] md:w-[250px]'>
                    <Image src="/Group 885@2x.png" width={250} height={100} />
                </div>
                <div className='w-[119px] md:w-[250px]'>
                    <Image src="/Group 884@2x.png" width={250} height={100} />
                </div>            
            </div>
        </div>
    );
}

export default Customer;
