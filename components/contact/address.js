import React from 'react';

function Address() {
    return (
        <div class="w-auto h-auto font-suk">
        <div class="grid grid-cols-1 gap-4 h-srceen text-center items-center md:grid-cols-2 md:w-full md:mx-auto md:my-auto pt-20 xl:px-10">
            <div class="border border-black w-5/6 h-48 pt-20 md:pt-28 mx-auto md:h-4/6 md:w-5/6 rounded-lg my-auto lg:w-4/6 lg:h-5/6">image</div>
            <div class="grid grid-rows-2 gap-4 h-full  text-center items-center mx-5 text-sm">
                <div class="text-left p-3 my-auto ">
                    <div class="font-semibold text-[20px]">
                        Headquarter 
                    </div>
                    <div class="mt-3 font-extralight">
                        80/359 หมู่ 3 ซ.คลองหลวง 26, <br/>ตำบลคลอง 1 อำเภอคลองหลวง จังหวัดปทุมธานี ประเทศไทย 12120
                        
                    </div>
                    <div class="my-3 font-semibold text-xs md:text-sm">
                        02-051-2453 / 02-329-5997 / 086-322-5858
                    </div>
                    <div class="text-center lg:text-left">
                        <button class="mt-3 border border-blue-500 p-1 rounded-full px-24 md:px-8 text-blue-500 font-semibold shadow-2xl h-10 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-black/40">ดูแผนที่ &gt;&gt;&gt;</button>

                    </div>
                </div>
                <div class=" text-left p-3">
                    <div class="font-semibold text-xl">
                        Sale & Developer Office
                    </div >
                    <div class="mt-3 font-extralight">
                        W42 Workwize ชั้น 3 The Street รัชดา 139 รัชดาภิเษก ถนนดินแดง<br/>กรุงเทพมหานคร 10400
                    </div>
                    <div class="my-3 font-semibold text-xs md:text-sm">
                        02-051-2453 / 02-329-5997 / 086-322-5858
                    </div>
                    <div class="text-center lg:text-left">
                       <button class="mt-3 border border-blue-500 p-1 rounded-full px-24 md:px-8 text-blue-500 font-semibold shadow-2xl h-10 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-black/40">ดูแผนที่ &gt;&gt;&gt;</button>
                    </div>
                </div>
            </div>   
        </div>
    </div>
);
}

export default Address;
