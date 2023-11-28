import React from 'react';
import {TbMessageCircleBolt} from "react-icons/tb";
import Link from "next/link";

const getData = async () => {
    const res = await fetch(`${process.env.BASEURL}/api/WorkList`)
    if(!res.ok){
        throw new Error("WorkList calling Fail")
    }
    return res.json()
}

const WorkList =async () => {
    const data = await getData();

    return (
        <div className="bg-white py-10 md:py-12 lg:py-16 ">
            <div className="container">
                <div className="flex flex-col items-start gap-y-4 ">
                    <h2 className="title"> work list</h2>
                    <h1 className="text-2xl font-semibold text-black w-1/3 text-justify block mb-8 ">We provide the Perfect Solution to your business growth</h1>
                    <div className="flex justify-between flex-wrap lg:flex-nowrap items-center">
                        {
                            data.map((item,id)=>(
                                <div key={id} className="w-full md:w-1/2 lg:w-1/3 flex items-start flex-col gap-y-5 p-3">
                                    <div className="bg-gradient centerFlex p-7 w-[93px] h-[93px] rounded-xl  ">
                                        <TbMessageCircleBolt size={30} className="text-[#130F26] hover:text-green3 myTransition" />
                                    </div>
                                    <h3 className="text-black text-2xl font-semibold ">{item['title']}</h3>
                                    <p className="text-lg font-normal text-black mb-8 ">{item["des"]}</p>
                                    <Link className="flex justify-start items-center gap-x-1 hover:gap-x-3 myTransition duration-300 text-lg" href="#">
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 17" fill="none">
                                            <path d="M10 1.83331L17 8.83331L10 15.8333M1 8.83331H17H1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkList;