import React from 'react';
import Image from 'next/image';
import Cus1 from './itemcus.js/cus1';
import Cus2 from './itemcus.js/cus2';
import Cus3 from './itemcus.js/cus3';
function Customer()  {
    return (
        <div className='font-suk justify-center text-center bg-[#FAFAFA] pt-[180px] z-40'>
            <div className='text-[38px] w-auto h-auto font-semibold'>
                ลูกค้าของเรา
            </div>
            <div className='mt-[50px]'>
                <Cus1/>
                <Cus2/>
                <Cus3/>
            </div>
            <div className='text-[20px] w-auto h-auto font-semibold mt-[124px]'>
                ได้รับการรับรองจาก
            </div>
            <div className='flex gap-[30px] justify-center pt-[25px]'>
                <div className=''>
                    <Image src="/Group 885@2x.png" width={250} height={100} />
                </div>
                <div className=''>
                    <Image src="/Group 884@2x.png" width={250} height={100} />
                </div>            
            </div>
        </div>
    );
}

export default Customer;
