import React from 'react';
import Image from 'next/image';
function Contact() {
    return (   
        <div className='pt-[48px] bg-[#FAFAFA]'>
            <div class="grid grid-cols-1 h-screen text-center items-center  bg-Fbox bg-cover bg-center font-suk pt-[64px]" >
                <div class="flex px-[478px]">
                    <div class="border-2 border-[#4E65FF] rounded-full w-[40px] h-[40px]">
                        <div className="p-[7px]" alt="logo">
                            <Image src="/fb-messenger-purple.svg" width={30} height={19.54}/>
                        </div>
                    </div>
                    <div class="border-2 border-[#4E65FF] rounded-full w-auto h-auto px-[14px] text-center ml-[16px]">
                        <div className="flex flex-row items-center text-center h-full">
                            <div className="w-[17px] h-[17px]">
                                <Image src="/Icon-call-purple.svg" width={17} height={17}/>
                            </div>
                            <div className="text-white text-[18px] font-medium tracking-tighter ml-1">
                                02-051-2453 / 02-329-5997 / 086-322-5858
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="justify-items-center text-white text-lg md:text-[20px] font-semibold mt-8">ส่งเมลหาเราได้ที่ sale@iapp.co.th</h1>
                </div>
                <div class="w-4/6 md:w-4/6 mx-auto xl:w-2/6 mt-4">
                    <h3 class="text-left">
                        <p1 class="text-white">ชื่อ-สกุล</p1>
                        <p2 class="text-red-500">  *</p2>
                                
                    </h3>
                    <input type="text" class="w-full justify-items-center rounded-lg h-10 p-3 hover:border hover:border-blue-500" placeholder="กรอกชื่อของคุณ"/>
                </div>
                <div class="w-4/6 md:w-4/6 mx-auto xl:w-2/6">
                    <h3 class="text-left">
                        <p1 class="text-white">อีเมลสำหรับติดต่อกลับ</p1> 
                        <p2 class="text-red-500">  *</p2>
                    </h3>
                    <input type="text" class="w-full justify-items-center rounded-lg h-10 p-3 hover:border hover:border-blue-500" placeholder="กรอกอีเมลของคุณ"/>
                </div>
                <div class="w-4/6  md:w-4/6 mx-auto xl:w-2/6">
                    <h3 class="text-left">
                        <p1 class="text-white">เบอร์โทรศัพท์</p1>
                        <p2 class="text-red-500">  *</p2>
                    </h3>
                    <input type="text" class="w-full justify-items-center rounded-lg h-10 p-3 hover:border hover:border-blue-500" placeholder="กรอกเบอร์โทรศัพท์"/>
                </div>
                <div class="w-4/6 md:w-4/6 mx-auto xl:w-2/6">
                    <h3 class="text-left text-white">สินค้าที่ต้องการติดต่อ
                        <p2 class="text-red-500">  *</p2>
                    </h3>
                    <div >
                        <select class="w-full text-gray-400 bg-white border rounded-md shadow-sm focus:border-indigo-600 h-10 px-2 hover:border hover:border-blue-500" >
                                <option class="" value="" disabled selected>สินค้าที่ต้องการติดต่อ</option>
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
                <div class="my-2 w-4/6 md:w-4/6 mx-auto md:text-right mb-10 xl:w-2/6">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none w-full md:w-2/6 md:items-right shadow-xl shadow-black/50">ส่งข้อความ</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
