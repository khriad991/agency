import React from 'react';
import SectionTitle from "@/components/home/SectionTitle";
import Image from "next/image";

const getData =async () => {
    const res = await fetch(`${process.env.BASEURL}/api/AllProject`)
    if(!res.ok){
        throw new Error("AllProject calling Fail")
    }
    return res.json();
}

const Projects =async () => {
    let  data =await getData();
        data = data.slice(0,6);
    return (
        <div className="bg-white py-10">
            <div className="container">
                <SectionTitle
                    name="all Project"
                    title="Better Agency/SEO Solution At Your Fingertips"
                    />
                <div className="flex items-center justify-center md:justify-between flex-wrap gap-y-8 gap-x-4 md:gap-x-auto  ">

                    {
                        data.map((item,id)=>(
                            <div key={id} className=" w-[48%]  centerFlex flex-col px-4 py-6  gap-y-3 shadow-5xl rounded-xl">
                                <div className=" w-full p-4">
                                    <Image className="object-cover rounded-xl" src={item["image"]} alt="image" width={540} height={470}/>
                                </div>
                                <h1 className="font-semibold text-black text-lg md:text-[26px] text-center">{item["title"]}</h1>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;