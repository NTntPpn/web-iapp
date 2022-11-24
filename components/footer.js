import Image from 'next/image';
export default function Footer() {
    return (   
        <div className='font-suk'>
            <footer class="bg-[#4E65FF]">
                <div class="md:flex px-[16px] md:px-[144px] md:h-[96px] h-[85px] mb-10 md:items-center md:mb-0">
                    <div  class=" pt-[16px] md:pt-0 w-[82px] md:w-[152px] mx-auto md:mx-0">
                        <div className="text-white text-4xl font-bold xl:w-36  text-center" alt="logo">
                            <Image src="/Group_78.svg" width={152} height={50}/>
                        </div>
                    </div>
                    <div className="border-2 border-[#4E65FF] rounded-full md:w-[385px] w-[347px] h-[40px] px-[13px] mx-auto md:mx-0 text-center mt-[8px] md:mt-0 md:ml-auto">
                            <div className="flex flex-row items-center text-center h-full ">
                                <div className="w-[29px] h-[29px]">
                                    <Image src="/call-blue.svg" width={444} height={444}/>
                                </div>
                                <div className="text-white text-[14px] md:text-[16px] font-medium tracking-tighter ml-[8px] w-full ">
                                    02-051-2453 / 02-329-5997 / 086-322-5858
                                </div>
                            </div>
                        </div>
                </div>
                <div class="mx-0 bg-[#F2F3FD] px-[16px] md:px-[144px] md:block hidden">
                    <div class="flex py-8 text-[#4E65FF]">

                        <div className='w-[172px] mr-auto'>
                            <h2 class="mb-6 text-[20px] font-medium tracking-tighter">Explore The iApp</h2> 
                            <ul class="text-[16px] font-light">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline">AI API</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Documentation</a>
                                </li>
                            </ul>
                        </div>

                        <div className='w-[172px] mr-auto'>
                            <h2 class="mb-6 text-[20px] font-medium">Contract</h2>
                            <ul class="text-[16px] font-light">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">W42, Workwize, 3rd Floor, the Street Rachada 139</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">80/359 หมู่ 3 ซ.คลองหลวง 26, ตำบลคลอง 1 อำเภอคลองหลวง จังหวัดปทุมธานี ประเทศไทย 12120</a>
                                </li>
                            </ul>
                        </div>

                        <div className='w-[172px] mr-auto'>
                            <h2 class="mb-6 text-[20px] font-medium">Connect</h2>
                            <ul class="text-[16px] font-light">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Messenger</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Facebook Page</a>
                                </li>
                                
                            </ul>
                        </div>

                        <div className='w-[172px] mr-auto'>
                            <h2 class="mb-6 text-[20px] font-medium">Top Product</h2>
                            <ul class="text-[16px] font-light">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">E-Voting</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">AI API</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">ChoChea Chatbot</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">E-KYC</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Robot</a>
                                </li>
                            </ul>
                        </div>

                        <div className="my-auto w-[48px] mr-[16px]">
                            <div className="xl:w-12" alt="logo">
                                <Image src="/lgfb.svg" width={48} height={48}/>
                            </div>
                        </div>

                        <div className="my-auto w-[48px]">
                            <div className="xl:w-12" alt="logo">
                                <Image src="/lgyoutube.svg" width={48} height={48}/>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div class="mx-0 bg-[#F2F3FD] block md:hidden">
                    <div class="px-[20px] flex py-8 text-[#4E65FF] ">
                        <div className='w-auto'>
                            <div>
                                <h2 class="mb-[4px] text-[16px] font-medium tracking-tighter w-[140px]">Explore The iApp</h2> 
                                <ul class="text-[14px] font-light">
                                    <li class="mb-[2px]">
                                        <a href="#" class=" hover:underline">AI API</a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="hover:underline">Documentation</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-[16px]'>
                                <h2 class="mb-[4px] text-[16px] font-medium">Connect</h2>
                                <ul class="text-[14px] font-light">
                                    <li class="mb-[2px]">
                                        <a href="#" class="hover:underline">Messenger</a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="hover:underline">Facebook Page</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className='mt-[16px]'>
                                <h2 class="mb-[4px] text-[16px] font-medium">Top Product</h2>
                                <ul class="text-[14px] font-light">
                                    <li class="mb-[2px]">
                                        <a href="#" class="hover:underline">E-Voting</a>
                                    </li>
                                    <li class="mb-[2px]">
                                        <a href="#" class="hover:underline">AI API</a>
                                    </li>
                                    <li class="mb-[2px]">
                                        <a href="#" class="hover:underline">ChoChea Chatbot</a>
                                    </li>
                                    <li class="mb-[2px]">
                                        <a href="#" class="hover:underline">E-KYC</a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="hover:underline">Robot</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div>
                                <h2 class=" text-[16px] font-medium">Contract</h2>
                                <ul class="text-[14px] font-light">
                                    <li class="mt-[4px]">
                                        <a href="#" class="hover:underline">W42, Workwize, 3rd Floor, the Street Rachada 139</a>
                                    </li>
                                    <li class="mt-[4px]">
                                        <a href="#" class="hover:underline">80/359 หมู่ 3 ซ.คลองหลวง 26, ตำบลคลอง 1 อำเภอคลองหลวง จังหวัดปทุมธานี ประเทศไทย 12120</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex gap-x-[14px] justify-end mt-[115px]'>
                                <div className="">
                                    <div className="xl:w-12" alt="logo">
                                        <Image src="/lgfb.svg" width={40} height={40}/>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="xl:w-12" alt="logo">
                                        <Image src="/lgyoutube.svg" width={40} height={40}/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="bg-[#F2F3FD] text-center justify-center mx-auto border-t border-[#C5CCF8] h-8 pt-1 xl:h-12 xl:pt-3">
                        <div class="text-[#4E65FF] text-sm xl:text-base text-center">© สงวนสิขสิทธิ์ พ.ศ.2565 บริษัท ไอแอพพ์เทคไนโลยี จำกัด
                        </div>
                </div>
            </footer>
        </div>

    )
  }