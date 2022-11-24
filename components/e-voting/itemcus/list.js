import React from 'react';
import Image from 'next/image';
function List() {
    return (
        <div className='relative w-full'>
                <div class="w-auto h-auto snap-x overflow-x-auto flex z-50 px-[100px] scrollbar-hide">
                    <div >
                            <div className='w-[250px] h-auto'>
                                <Image src="/Group 15207@2x.png" width={250} height={130}/>
                            </div>
                    </div>
                    <div>
                        <div className='w-[250px] h-auto'>
                            <Image src="/Group 15208@2x.png" width={250} height={130}/>
                        </div>
                    </div>
                    <div>
                        <div className='w-[250px] h-auto'>
                            <Image src="/Group 18757@2x.png" width={250} height={130}/>
                        </div>
                    </div>
                    <div>
                        <div className='w-[250px] h-auto'>
                            <Image src="/Group 18765@2x.png" width={250} height={130}/>
                        </div>
                    </div>
                    <div >
                        <div className='w-[250px] h-auto'>
                            <Image src="/Group 18766@2x.png" width={250} height={130}/>
                        </div>
                    </div>
                    <div>
                        <div className='w-[250px] h-auto'>
                            <Image src="/Group 18769@2x.png" width={250} height={130}/>      
                        </div>
                    </div>
                    <div >
                        <div className='w-[250px] h-auto'>
                            <Image src="/Group 18770@2x.png" width={250} height={130}/>
                        </div>
                    </div>  
                </div>
            
            <div className='absolute w-[100px] h-[150px] bg-[#FAFAFA] top-[15px] right-0 z-50'>
            </div>
            <div className='absolute w-[115px] h-[150px] bg-[#FAFAFA] top-[16px] left-0 z-50'>
            </div>
        </div>
    );
}

export default List;
