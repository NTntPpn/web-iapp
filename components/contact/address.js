import React from 'react';

function Address() {
    return (
        <div className='pt-[170px] px-[16px] md:px-[144px] font-suk'>
            <div className='xl:flex'>
                <div className='w-full md:w-[662px] h-[237px] md:h-[446px] border rounded-xl'>

                </div>
                <div className="xl:ml-[48px]">
                    <div className='tetx-[14px] md:text-[20px] font-semibold mt-[29px]'>Headquarter</div>
                    <div className='tetx-[14px] md:text-[16px] font-light mt-[8px]'>80/359 หมู่ 3 ซ.คลองหลวง 26, ตำบลคลอง 1 อำเภอคลองหลวง จังหวัดปทุมธานี ประเทศไทย 12120</div>
                    <div className='tetx-[14px] md:text-[16px] font-semibold mt-[8px] tracking-tighter md:tracking-normal'>02-051-2453 / 02-329-5997 / 086-322-5858</div>
                    <button className='w-full md:w-[112px] h-[48px] text-[#4E65FF] border border-[#4E65FF] rounded-full mt-[16px]'>
                        ดูแผนที่&gt;&gt;
                    </button>

                    <div className='tetx-[14px] md:text-[20px] font-semibold mt-[28px]'>Sale & Developer Office</div>
                    <div className='tetx-[14px] md:text-[16px] font-light mt-[8px]'>W42 Workwize ชั้น 3 The Street รัชดา 139 รัชดาภิเษก ถนนดินแดง กรุงเทพมหานคร 10400</div>
                    <div className='tetx-[14px] md:text-[16px] font-semibold mt-[8px] tracking-tighter md:tracking-normal'>02-051-2453 / 02-329-5997 / 086-322-5858</div>
                    <button className='w-full md:w-[112px] h-[48px] text-[#4E65FF] border border-[#4E65FF] rounded-full mt-[16px]'>
                        ดูแผนที่&gt;&gt;
                    </button>
                </div>
            </div>
        </div>
);
}

export default Address;
