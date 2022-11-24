import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Ph1 from '../components/home/phitems/ph1'
import Ph2 from '../components/home/phitems/ph2'
import Ph3 from '../components/home/phitems/ph3'
import Ph4 from '../components/home/phitems/ph4'
import Ph5 from '../components/home/phitems/ph5'
import List from '../components/e-voting/itemcus/list'
function test() {
    const [navbar, setNavbar] = useState(false);
    const [mainmanu, setmainmanu] = useState(false);
    const [aiapi, setaiapi] = useState(false);
    const [doc, setdoc] = useState(false);
    // const [manu, setmanu] = useState(1);
    const [oncloud,setoncloud] = useState(false)
    const [thainatural,setthainatural] = useState(false)
    return (
        <div className='sticky top-0 z-[999]'>
            <div className='relative '>
            <nav className="w-full h-auto shadow font-suk ">
                <div className={`md:h-[48px] ${navbar ? "bg-[#F2F3FD] h-screen" : "bg-[#4E65FF]"}  justify-between mx-auto md:items-center md:flex md:pl-[9.72%] md:pr-[12.15%] shadow`}>
                    <div className="pt-[48px] md:pt-0 md:h-[48px] ">
                        <div className={`flex items-center justify-between md:block content-end `}>
                            <div className={`${navbar ? "hidden" : "block"}`}>
                            <Link href="/"><Image src="/Group_78.svg" width={122} height={40} /></Link>
                            </div>
                            <div className={`${navbar ? "ml-auto" : null} md:hidden   mr-3`}>
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)&setmainmanu(false)&setaiapi(false)&setdoc(false)&setoncloud(false)&setthainatural(false)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 text-[#4E65FF] bg-[#F2F3FD]"
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
                                            className="w-8 h-8 text-white"
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
                        <div className={`h-auto md:flex-1 text-left md:text-center  md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            {/* firstsubmenu */}
                            <ul className="grid md:grid-cols-3  md:justify-center items-left md:text-center md:flex md:space-y-0 font-extralight top-[96px] md:gap-[8px]">
                                <button 
                                className={`w-full h-auto md:w-[88px]  md:bg-[#4E65FF] text-white  hover:font-normal relative text-left` } 
                                onClick={() => setmainmanu(!mainmanu)&setaiapi(false)&setdoc(false)}
                                >
                                        <div className={`${mainmanu ? "bg-[#4E65FF] text-white font-medium" : "bg-[#F2F3FD] md:bg-[#4E65FF] text-black md:text-white font-medium md:font-normal"} h-[48px] border-[#D8DEFF] border md:border-none `}> 
                                        <div className={`w-[279px] md:w-[88px] h-[26px] pt-[14px] md:text-center pl-[16px] md:pl-0`}>
                                                Main Site
                                                
                                        </div>
                                        
                                        </div>
                                        
                                        <div className='md:hidden'>
                                            <div className={`h-auto md:flex-1 text-left md:text-center md:pb-0 md:mt-0 ${mainmanu ? "block text-[#595959] pl-[16px] font-extralight" : "hidden"}`}>
                                                <Link href={"/e-voting"}><div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>E-Voting</div></Link>
                                                <Link href={"/E-KYC"}><div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>E-KYC</div></Link>
                                                <div className='w-[136px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Chochea Chatbot</div>
                                                <div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Robot</div>
                                                <div className='w-[234px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Face Recognition for Building</div>
                                                <div className='w-[124px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Success Story</div>
                                                <Link href={"/blog"}><div className='w-[72px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Blog</div></Link>
                                                <div className='w-[114px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Sertification</div>
                                                <Link href={"/contact"}><div className='w-[80px] h-[36px] md:pt-1.5 my-1.5 md:mx-auto'>Contact</div></Link>
                                            </div>
                                        </div>
                                        {mainmanu ? 
                                                    (
                                                        <div className="md:absolute md:w-full md:h-[8px] md:bottom-0 md:left-0 md:bg-white md:rounded-t-md"/>
                                                    )
                                                    : null
                                                }
                                </button>

                                <button 
                                className={`w-full h-auto md:w-[88px]  md:bg-[#4E65FF] text-white  hover:font-normal relative text-left` } 
                                onClick={() => setaiapi(!aiapi)&setmainmanu(false)&setdoc(false)}
                                >
                                        <div className={`${aiapi ? "bg-[#4E65FF] text-white font-medium " : "bg-[#F2F3FD] md:bg-[#4E65FF] text-black md:text-white font-medium md:font-normal"} h-[48px] border-[#D8DEFF] border md:border-none `}> 
                                            <div className={`w-[279px] md:w-[88px] h-[26px] pt-[14px] md:text-center pl-[16px] md:pl-0 `}>
                                                    AI API
                                            </div>
                                        </div>
                                        
                                        <div className='md:hidden'>
                                            <div className={`h-auto md:flex-1 text-left md:text-center md:pb-0 md:mt-0 ${aiapi ? "block text-[#595959] pl-[16px] font-extralight" : "hidden"}`}>
                                                <div className='w-[112px] h-[36px] md:pt-1.5 my-1.5 font-'>ai.iapp.co.th</div>
                                                <div>
                                                    <div className='w-[120px] h-[36px] md:pt-1.5 my-1.5'
                                                    onClick={() => setoncloud(!oncloud)}
                                                    >
                                                        On Cloud
                                                    </div>
                                                </div>
                                                    <div className='w-[128px] h-[36px] md:pt-1.5 my-1.5 '>On Promis</div>
                                            </div>
                                        </div>
                                        {aiapi ? 
                                                    (
                                                        <div className="md:absolute md:w-full md:h-[8px] md:bottom-0 md:left-0 md:bg-white md:rounded-t-md"/>
                                                    )
                                                    : null
                                                }
                                </button>

                                <button 
                                className={`w-full h-auto md:w-[88px]  md:bg-[#4E65FF] text-white md:mr-[40px] hover:font-normal relative text-left` } 
                                onClick={() => setdoc(!doc)&setaiapi(false)&setmainmanu(false)}
                                >
                                        <div className={`${doc ? "bg-[#4E65FF] text-white font-medium" : "bg-[#F2F3FD] md:bg-[#4E65FF] text-black md:text-white font-medium md:font-normal"} h-[48px] border-[#D8DEFF] border md:border-none `}> 
                                        <div className={`w-[279px] md:w-[88px] h-[26px] pt-[14px] md:text-center pl-[16px] md:pl-0`}>
                                                Doc
                                        </div>
                                        </div>
                                        
                                        <div className='md:hidden'>
                                        <div className={`h-auto md:flex-1 text-left md:text-center md:pb-0 md:mt-0 ${doc ? "block text-[#595959] pl-[16px] font-extralight" : "hidden"}`}>
                                                <div className='w-[auto] h-[36px] md:pt-1.5 my-1.5'>iapp-technology.gitbook.io</div>
                                            </div>
                                        </div>
                                        {doc ? 
                                                    (
                                                        <div className="md:absolute md:w-full md:h-[8px] md:bottom-0 md:left-0 md:bg-white md:rounded-t-md"/>
                                                    )
                                                    : null
                                                }
                                </button>
                            </ul>
                            {/* firstsubmenu */}


                            {/* //secondsubmenu */}
                            <div className='hidden md:block'>
                            {mainmanu ? 
                                        (
                                            <div className="md:flex flex-wrap w-screen h-auto min-h-min md:bg-[#F5F5F5] shadow absolute md:top-[48px] md:left-0 text-center md:pl-[9.72%] md:pr-[13.33%] font-extralight items-center md:gap-x-4 justify-center text-[#595959] pt-1.5 md:pt-0">
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
                            <div className='hidden md:block'>
                                {aiapi ? 
                                            (
                                            <div className="md:flex flex-wrap w-screen h-auto min-h-min md:bg-[#F5F5F5] shadow absolute md:top-[48px] md:left-0 text-center md:pl-[9.72%] md:pr-[13.33%] font-extralight  md:gap-x-4  text-[#595959] pt-1.5 md:pt-0">
                                                <div className='w-[112px] h-[36px] md:pt-1.5 my-1.5 '>ai.iapp.co.th</div>
                                                <div className='w-[120px] h-[48px] relative group/1'>
                                                    <div className='h-[36px] my-auto pt-[12px]'>On Cloud</div>
                                                    <div class="invisible group-hover/1:visible absolute w-[300px] h-auto shadow text-left text-[#595959] top-[48px] py-[23px] bg-white rounded-b-xl tracking-tighter">
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/2'>
                                                            Thai Natural Language Processing
                                                            <p class="invisible group-hover/2:visible absolute w-[450px] h-auto shadow text-left text-[#595959] top-[23px] left-[300px] py-[23px] bg-white tracking-tighter rounded-b-xl">
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai Text Summarization</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Question-Answer Generation from Paragraph Text for Exam</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai Automatic Question Answering (QA)</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai - English Machine Translation (MT)</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai Text Parser</div>

                                                            </p>
                                                        </div>
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/3'>
                                                            Image Recognition
                                                            

                                                        </div>
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/4'>
                                                            Voice and Speech
                                                            
                                                        </div>
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/5'>
                                                            Optimization and Prediction
                                                            

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-[120px] h-[48px] relative group/1'>
                                                    <div className='h-[36px] my-auto pt-[12px]'>On Cloud</div>
                                                    <div class="invisible group-hover/1:visible absolute w-[330px] h-auto shadow text-left text-[#595959] top-[48px] py-[23px] bg-white rounded-b-xl tracking-tighter">
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/2'>
                                                            Thai Natural Language Processing
                                                            <p class="invisible group-hover/2:visible absolute w-[450px] h-auto shadow text-left text-[#595959] top-[23px] left-[300px] py-[23px] bg-white tracking-tighter rounded-b-xl">
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai Text Summarization</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Question-Answer Generation from Paragraph Text for Exam</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai Automatic Question Answering (QA)</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai - English Machine Translation (MT)</div>
                                                                <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px]'>Thai Text Parser</div>

                                                            </p>
                                                        </div>
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/3'>
                                                            Image Recognition
                                                            

                                                        </div>
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/4'>
                                                            Voice and Speech
                                                            

                                                        </div>
                                                        <div className='px-[16px] hover:text-white hover:bg-[#4E65FF] h-[40px] pt-[7px] group/5'>
                                                            Optimization and Prediction
                                                        

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            ): null
                                }   
                            </div>
                            <div className='hidden md:block'>
                                {doc ? 
                                            (
                                            <div className="md:flex flex-wrap w-screen h-auto min-h-min md:bg-[#F5F5F5] shadow absolute md:top-[48px] md:left-0 text-center md:pl-[9.72%] md:pr-[13.33%] font-extralight md:gap-x-4  text-[#595959] pt-1.5 md:pt-0">
                                                <div className='w-[auto] h-[36px] md:pt-1.5 my-1.5'>iapp-technology.gitbook.io</div>
                                            </div>
                                            )
                                            : null
                                        }
                            </div>
                            {/* //submenu */}


                            {/* //secondsubmenumobile */}
                            <div className='md:hidden'>
                                {oncloud ? 
                                            (
                                                <div className='absolute top-[96px] bg-[#F2F3FD] h-full w-full'>
                                                    <div className='w-full h-[48px] bg-[#4E65FF] px-[16px]'>
                                                        <div className='w-full h-[36px] mt-[6px] text-[#FFFFFF] font-medium pt-[12px]'>
                                                        On Cloud
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'
                                                        onClick={() => setthainatural(!thainatural)}
                                                        >
                                                        Thai Natural Language Processing
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Image Recognition
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Voice and Speech
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Optimization and Prediction
                                                        </div>
                                                    </div>

                                                </div>
                                            
                                                            
                                                        
                                            ): null
                                }   
                            </div>

                            {/* //secondsubmenumobile */}


                            {/* thirdsubmenumoblie */}
                            <div className='md:hidden'>
                                {thainatural ? 
                                            (
                                                <div className='absolute top-[96px] bg-[#F2F3FD] h-full w-full'>
                                                    <div className='w-full h-[48px] bg-[#4E65FF] px-[16px]'>
                                                        <div className='w-full h-[36px] mt-[6px] text-[#FFFFFF] font-medium pt-[12px]'>
                                                            Thai Natural Language Processing
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Thai Text Summarization
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Question-Answer Generation from ...
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Thai Automatic Question Answering …
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Thai - English Machine Translation (MT)
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[48px] px-[16px]'>
                                                        <div className='w-full  h-[36px] mt-[6px] text-[#595959] font-extralight pt-[12px]'>
                                                        Thai Text Parser
                                                        </div>
                                                    </div>

                                                </div>
                                            
                                                            
                                                        
                                            ): null
                                }   
                            </div>




                            {/* thirdsubmenumoblie */}
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default test;

