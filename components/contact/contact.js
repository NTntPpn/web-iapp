import React from 'react';
import Image from 'next/image';
function Contact() {
    return (   
        <div className='pt-[0px] bg-[#FAFAFA] h-auto md:h-[812px]'>
            <div className="h-full  bg-Fbox bg-cover bg-center font-suk pt-[119px] pb-[53px]">
                <div className='md:w-[468px] h-auto mx-auto'>
                    <div className='w-full h-full md:flex'>
                    <div className="border border-[#4E65FF] rounded-full w-[40px] h-[40px] mx-auto md:mx-0">
                            <div className="w-[40px] pl-[6.5px] pt-[6.5px] " alt="logo">
                                <Image src="/fb-messenger-purple.svg" width={25} height={25}/>
                            </div>
                        </div>
                        <div className='mx-auto md:w-[485px] w-[347px]'>
                            <div className="border-2 border-[#4E65FF] rounded-full  h-[40px] px-[13px] ml-[14px] md:mx-0 text-center md:ml-4 mt-[8px] md:mt-0 mx-auto">
                                <div className="flex flex-row items-center h-full">
                                    <div className="w-[17px] h-[17px]">
                                        <Image src="/Icon-call-purple.svg" width={17} height={17}/>
                                    </div>
                                    <div className="text-white text-[14px] md:text-[16px] tracking-tighter md:tracking-normal font-medium ml-[8px] w-full">
                                        02-051-2453 / 02-329-5997 / 086-322-5858
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-[312px] md:w-[424px] text-center'>
                    <div className='mt-[32px] md:mt-[24px]'>
                        <h1 className="text-white text-[16px] md:text-[20px] font-semibold">ส่งเมลหาเราได้ที่ sale@iapp.co.th</h1>
                    </div>
                    <div className="w-[312px] md:w-[424px] mt-[22px]">
                        <h3 className="text-left">
                            <p1 className="text-white">ชื่อ-สกุล</p1>
                            <p2 className="text-red-500">  *</p2>
                                    
                        </h3>
                        <input type="text" className="w-full rounded-lg h-10 p-3 hover:border hover:border-blue-500" placeholder="กรอกชื่อของคุณ"/>
                    </div>
                    <div className="w-[312px] md:w-[424px] mt-[24px]">
                        <h3 className="text-left">
                            <p1 className="text-white">อีเมลสำหรับติดต่อกลับ</p1> 
                            <p2 className="text-red-500">  *</p2>
                        </h3>
                        <input type="text" className="w-full justify-items-center rounded-lg h-10 p-3 hover:border hover:border-blue-500" placeholder="กรอกอีเมลของคุณ"/>
                    </div>
                    <div className="w-[312px] md:w-[424px] mt-[24px]">
                        <h3 className="text-left">
                            <p1 className="text-white">เบอร์โทรศัพท์</p1>
                            <p2 className="text-red-500">  *</p2>
                        </h3>
                        <input type="text" className="w-full justify-items-center rounded-lg h-10 p-3 hover:border hover:border-blue-500" placeholder="กรอกเบอร์โทรศัพท์"/>
                    </div>
                    <div className="w-[312px] md:w-[424px] mt-[24px]">
                        <h3 className="text-left text-white">สินค้าที่ต้องการติดต่อ
                            <p2 className="text-red-500">  *</p2>
                        </h3>
                        <div >
                            <select className="w-full text-gray-400 bg-white border rounded-md shadow-sm focus:border-indigo-600 h-10 px-2 hover:border hover:border-blue-500" >
                                    <option className="" value="" disabled selected>สินค้าที่ต้องการติดต่อ</option>
                                <optgroup label="Product">
                                    <option>E-Voting</option>
                                    <option>E-KYC</option>
                                    <option>Chochea Chatbot</option>
                                    <option>Face Recognition for Building</option>
                                    <option>Robot</option>
                                </optgroup>
                                <optgroup label="AI API">
                                    <option>Thai Text Summerization</option>
                                    <option>Book Bank OCR</option>
                                    <option>Music Source Separator</option>
                                    <option>Automatic Route Optimization</option>
                                    <option>Question-Answer Generation from Paragraph Text for...</option>
                                    <option>Face aand ID card Verification for KYC</option>
                                    <option>Noise Subtraction</option>
                                    <option>Stock Trading Prediction</option>
                                    <option>Thai Automatic Question Answering</option>
                                    <option>Document OCR</option>
                                    <option>Thai Text To Speech (TTS)</option>
                                    <option>Thai - English Machine Translation(MT)</option>
                                    <option>Face Detection</option>
                                    <option>Thai Speech To Text(ASR)</option>
                                    <option>Thai Text Parser</option>
                                    <option>Face Recognition</option>
                                    <option>Face Verification(Comparison)</option>
                                    <option>Power Meter OCR</option>
                                    <option>Remove Blackground AI on Selfie Photo for Photo ID</option>
                                    <option>Thai Nation ID Card OCR</option>
                                    <option>Thai Vehicle License Plate Image Recognition(LPR)</option>
                                    <option>Water Meter OCR</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="mt-[60px] text-right">
                        <button type="button" className="w-[122px] h-[48px] text-white bg-[#4E65FF] hover:bg-blue-800 focus:ring-white rounded-full focus:outline-none shadow-xl shadow-black/50">ส่งข้อความ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
