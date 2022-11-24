import React from 'react';
import Image from 'next/image';
import List from './itemcus/list';
function Customer()  {
    return (
        <div className='font-suk justify-center text-center bg-[#FAFAFA] pt-[80px] z-40'>
            <div className='text-[16px] md:text-[38px] w-auto h-auto font-semibold'>
                ลูกค้าของเรา
            </div>
            <div className='mt-[50px] hidden md:block'>
                <List/>
            </div>
            <div className='md:hidden px-[16px] gap-[6px] flex'>
                    <div className='w-[168px] h-auto'>
                        <Image src="/Group 15207@2x.png" width={250} height={130}/>
                    </div>
                    <div className='w-[168px] h-auto'>
                        <Image src="/Group 15208@2x.png" width={250} height={130}/>
                    </div>
            </div>
            <div className='md:hidden px-[16px] gap-[6px] flex'>
                    <div className='w-[168px] h-auto'>
                        <Image src="/Group 18757@2x.png" width={250} height={130}/>
                    </div>
                    <div className='w-[168px] h-auto'>
                        <Image src="/Group 18765@2x.png" width={250} height={130}/>
                    </div>
            </div>

            <div class="md:hidden ">
                <div className='relative w-full'>
                        <div class="w-auto h-auto snap-x overflow-x-auto flex z-50 px-[16px] scrollbar-hide">
                            <div >
                                <div className='w-[168px] h-auto'>
                                    <Image src="/Group 18766@2x.png" width={250} height={130}/>
                                </div>
                            </div>
                            <div>
                                <div className='w-[168px] h-auto'>
                                    <Image src="/Group 18769@2x.png" width={250} height={130}/>      
                                </div>
                            </div>
                            <div >
                                <div className='w-[168px] h-auto'>
                                    <Image src="/Group 18770@2x.png" width={250} height={130}/>
                                </div>
                            </div>  
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
