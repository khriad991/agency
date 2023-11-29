import React from 'react';
import Image from "next/image";

const getData =async () => {
    const res = await fetch(`${process.env.BASEURL}/api/StatList`)
    if(!res.ok){
        throw new Error("StatList Calling fail")
    }
    return res.json();
}

const StatList =async  () => {
    const data = await  getData();
    return (
        <div className="bg-white py-8">
            <div className="container">
                <div className="flex justify-between items-center gap-x-6 flex-wrap lg:flex-nowrap gap-y-6  w-full py-10  ">

                    <div className="w-1/2 lg:w-1/4 centerFlex flex-col bg-white w-[290px] h-[290px] shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl  ">
                            <Image src="/assets/like.svg" width={40}  height={40} alt=""/>
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["followers"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">followers </h4>
                    </div>

                    <div className="w-1/2 lg:w-1/4 centerFlex flex-col bg-white w-[290px] h-[290px] shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl">
                            <Image src="/assets/like.svg" width={40}  height={40} alt=""/>
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["solved"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">solved </h4>
                    </div>

                    <div className="w-1/2 lg:w-1/4 centerFlex flex-col bg-white w-[290px] h-[290px] shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl  ">
                            <Image src="/assets/like.svg" width={40}  height={40} alt=""/>
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["customers"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">customers </h4>
                    </div>


                    <div className="w-1/2 lg:w-1/4 centerFlex flex-col bg-white w-[290px] h-[290px] shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl  ">
                            <Image src="/assets/like.svg" width={40}  height={40} alt=""/>
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["projects"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">projects </h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatList;