import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image"
export default function navbar() {
    const [navbar, setNavbar] = useState(false);
    const [manu, setmanu] = useState(1);
    return (
        <div className='sticky top-0 z-[999]'>
            <div className='relative '>
            <nav className="w-full h-auto shadow font-suk ">
            <div className=" md:h-auto bg-[#4E65FF] justify-between mx-auto md:items-center md:flex md:pl-[9.72%] md:pr-[12.15%] shadow">
                <div className="pt-[48px] md:pt-0 md:h-[48px] ">
                    <div className="flex items-center justify-between md:block content-end">
                        <Link href="/">
                            <Image src="/Group_78.svg" width={122} height={40} />
                        </Link>
                        <div className="md:hidden mr-3">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)&&setmanu(0)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            // fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            // clipRule="evenodd"
                                        />
                                    </svg>
                                    
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            // strokeLinecap="round"
                                            // strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`h-auto flex-1 text-center justify-self-center md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="grid grid-cols-3 items-center justify-center text-center md:flex md:space-y-0 font-extralight top-[96px]">
                            <li className={`w-full md:w-[88px] ${manu === 1 ? `bg-[#4154d3]`: `bg-[#4E65FF]`} md:bg-[#4E65FF] text-white md:mr-[40px] hover:font-normal relative md:border-none  border-t border-white rounded-full`}>
                                <button className="w-full h-[48px] mx-auto"  onClick={() => setmanu(1)}>
                                    Main Site
                                    {manu === 1 ? 
                                    (
                                        <div className="md:absolute md:w-full md:h-[8px] md:bottom-0 md:left-0 md:bg-white md:rounded-t-md"/>
                                    )
                                     : null
                                }
                                </button>
                                
                            </li>
                            <li className={`w-full md:w-[88px] ${manu === 2 ? `bg-[#4154d3]`: `bg-[#4E65FF]`} md:bg-[#4E65FF] text-white md:mr-[40px] hover:font-normal relative md:border-none  border-t border-white rounded-full`}>
                                <button className="h-[48px]" onClick={() => setmanu(2)}>
                                    AI API
                                    {manu === 2 ? 
                                        (
                                            <div className="md:absolute md:w-full md:h-[8px] md:bottom-0 md:left-0 md:bg-white md:rounded-t-md"/>
                                        ): null
                                    }
                                </button>
                            </li>
                            <li className={`w-full md:w-[88px] ${manu === 3 ? `bg-[#4154d3]`: `bg-[#4E65FF]`} md:bg-[#4E65FF] text-white md:mr-[40px] hover:font-normal relative md:border-none  border-t border-white rounded-full`}>
                            <button className="h-[48px]" onClick={() => setmanu(3)}>
                                    Doc
                                    {manu === 3 ? 
                                        (
                                            <div className="md:absolute md:w-full md:h-[8px] md:bottom-0 md:left-0 md:bg-white md:rounded-t-md"/>                                        
                                        )
                                        : null
                                    }
                                </button>
                            </li>
                            
                        </ul>
                        <div >
                        {manu === 1 ? 
                                    (
                                        <div className="md:flex flex-wrap w-screen h-auto min-h-min md:bg-[#FFFFFF] shadow absolute md:top-[48px] md:left-0 text-center md:pl-[9.72%] md:pr-[13.33%] font-extralight items-center md:gap-x-4 justify-center text-[#595959] pt-1.5 md:pt-0">
                                            <Link href={"/e-voting"}><div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>E-Voting</div></Link>
                                            <Link href={"/E-KYC"}><div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>E-KYC</div></Link>
                                            <div className='w-[136px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Chochea Chatbot</div>
                                            <div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Robot</div>
                                            <div className='w-[234px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Face Recognition for Building</div>
                                            <div className='w-[124px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Success Story</div>
                                            <Link href={"/blog"}><div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Blog</div></Link>
                                            <div className='w-[114px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Sertification</div>
                                            <Link href={"/contact"}><div className='w-[80px] h-[36px] md:pt-1.5 my-1.5 mx-auto'>Contact</div></Link>
                                        </div>
                                    )
                                     : null
                                }
                        </div>
                        
                        {manu === 2 ? 
                                        (
                                        <div className="md:flex flex-wrap w-screen h-auto min-h-min md:bg-[#FFFFFF] shadow absolute md:top-[48px] md:left-0 text-center md:pl-[9.72%] md:pr-[13.33%] font-extralight  md:gap-x-4  text-[#595959] pt-1.5 md:pt-0">
                                            <div className='w-[112px] h-[36px] md:pt-1.5 my-1.5 '>ai.iapp.co.th</div>
                                            <div className='w-[120px] h-[36px] md:pt-1.5 my-1.5 '>On Cloud</div>
                                            <div className='w-[128px] h-[36px] md:pt-1.5 my-1.5 '>On Promis</div>
                                        </div>
                                        ): null
                                    }
                        {manu === 3 ? 
                                        (
                                        <div className="md:flex flex-wrap w-screen h-auto min-h-min md:bg-[#FFFFFF] shadow absolute md:top-[48px] md:left-0 text-center md:pl-[9.72%] md:pr-[13.33%] font-extralight md:gap-x-4  text-[#595959] pt-1.5 md:pt-0">
                                            <div className='w-[auto] h-[36px] md:pt-1.5 my-1.5'>iapp-technology.gitbook.io</div>
                                        </div>
                                        )
                                        : null
                                    }
                    </div>
                    
                </div>
            </div>
            </nav>
        </div>
        </div>

        
    );
}
