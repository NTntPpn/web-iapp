import Image from 'next/image';
export default function Footer() {
    return (   
        <div className='font-suk'>
            <footer class="bg-[#4E65FF]">
                <div class="md:flex  sm:px-5 md:h-[96px] h-[85px] mb-10 md:items-center md:mb-0">
                    <div  class="px-3 pt-[16px] md:pt-0">
                        <div className="text-white text-4xl font-bold mx-auto md:mx-20 xl:w-36 w-[152px] text-center" alt="logo">
                            <Image src="/Group_78.svg" width={152} height={50}/>
                        </div>
                    </div>
                    <ul class="flex flex-wrap md:ml-auto items-center justify-center text-center mb-6 text-m text-white md:pr-20 md:mt-6">
                        <li className='md:block hidden'>
                            <div className="xl:mr-3" alt="logo">
                                <Image src="/call-blue.svg" width={48} height={48}/>
                            </div>
                        </li>
                        <li className='block md:hidden'>
                            <div className="xl:mr-3" alt="logo">
                                <Image src="/call-blue.svg" width={29} height={29}/>
                            </div>
                        </li>

                        <li>
                            <a class="mx-1 md:mr-6 text-base font-medium">02-051-2453</a>
                        </li>
                        <li>
                            <a class="mx-1 md:mr-6 text-base font-medium">02-329-5997</a>
                        </li>
                        <li>
                            <a class="mx-1 md:mr-6 text-base font-medium">086-322-5858</a>
                        </li>
                    </ul>
                </div>
                <div class="mx-0 bg-[#F2F3FD] px-10 md:px-20 md:block hidden">
                    <div class="p-0 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10 py-8 md:px-6 text-[#4E65FF] xl:px-10">
                        <div>
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
                        <div>
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
                        <div>
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
                        <div>
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
                        <div className="my-auto ml-auto">
                            <div className="xl:w-12" alt="logo">
                                <Image src="/lgfb.svg" width={48} height={48}/>
                            </div>
                        </div>
                        <div className="my-auto mr-auto">
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
                        <div className='w-auto'>
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