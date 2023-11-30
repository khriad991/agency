import React from 'react';
import Image from "next/image";
import {SlLike} from "react-icons/sl";
import {GoProjectSymlink} from "react-icons/go";
import {GiShadowFollower} from "react-icons/gi";
import {BiSolidCustomize} from "react-icons/bi";

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
        <div className="bg-white py-10">
            <div className="container">
                <div className="flex justify-around lg:justify-around flex-wrap gap-6 py-10  ">

                    <div className="w-[45%] lg:w-[23%] p-8 md:p-12 centerFlex flex-col bg-white shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl  ">
                            <GiShadowFollower size={40} />
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["followers"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">followers </h4>
                    </div>

                    <div className="w-[45%] lg:w-[23%] p-8 md:p-12 centerFlex flex-col bg-white shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl">
                            <SlLike size={40} />
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["solved"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">solved </h4>
                    </div>

                    <div className="w-[45%] lg:w-[23%] p-8 md:p-12 centerFlex flex-col bg-white shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl  ">
                            <BiSolidCustomize size={40}  />
                        </div>
                        <h2 className="font-semibold text-3xl text-black mt-4 ">{data["customers"]} </h2>
                        <h4 className="font-bold text-base text-black  capitalize">customers </h4>
                    </div>

                    <div className="w-[45%] lg:w-[23%] p-8 md:p-12 centerFlex flex-col bg-white shadow-3xl ">
                        <div className="bg-gradient centerFlex w-[100px] h-[100px] rounded-xl  ">
                            <GoProjectSymlink size={40} />
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