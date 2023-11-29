import React from 'react';

import BrandList from "@/components/BrandList";

const getData = async () => {
    const res = await fetch(`${process.env.BASEURL}/api/HeroList`);
    if(!res.ok){
        throw new Error("HeroList calling Fail")
    }
    return res.json()
}



const Hero = async () => {
    const data = await getData();
    return (
        <div className="bg-gradient py-5">
            <div className="container ">
                <div className="flex justify-between flex-wrap md:flex-nowrap  ">
                    <div className="w-full lg:flex-[45%] flex justify-start flex-col mt-10">
                        <h1 className="text-black font-bold text-5xl ">
                            {data["title"]}
                        </h1>
                        <p className="text-black text-xl my-4">
                            {data["description"]}
                        </p>

                        <button className="btn-green py-4 px-10 rounded-xl mt-3 w-fit border-2 border-green3 "> Get Started</button>

                    </div>
                    <div className="w-full lg:flex-[55%] flex justify-between gap-y-3 flex-wrap flex-col py-8">
                        <div className='flex w-full justify-between flex-wrap md:flex-nowrap gap-y-3 gap-x-3 '>
                            <img className="object-cover w-full md:w-1/2 lg:w-2/3 h-[271px] rounded-lg" src={data["image2"]} alt=""/>
                            <img className="object-cover w-full md:w-1/2 lg:w-1/3 h-[271px] rounded-lg" src={data["image1"]} alt=""/>
                        </div>

                        <div className='flex w-full justify-between flex-wrap md:flex-nowrap gap-y-3 gap-x-3 '>
                            <img className="object-cover w-full md:w-1/2 lg:w-1/3 h-[164px] rounded-lg" src={data["image4"]} alt=""/>
                            <img className="object-cover w-full md:w-1/2 lg:w-2/3 h-[164px] rounded-lg" src={data["image3"]} alt=""/>
                        </div>

                    </div>
                </div>

            </div>
            <BrandList/>
        </div>
    );
};

export default Hero;