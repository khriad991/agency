import React from 'react';
import SectionTitle from "@/components/home/SectionTitle";
import Image from "next/image";

const getData = async () => {
    const res = await fetch(`${process.env.BASEURL}/api/AllService`)
    if(!res.ok){
        throw new Error("AllService calling Fail")
    }
    return res.json();
}

const OurServices =async () => {
    const data = await getData();
    return (
        <div className="bg-white shadow-4xl py-10">
            <div className="container">
                <SectionTitle
                    name="Our All Services"
                    title="We Provide BestWeb design services"
                    />
                <div className="centerFlex md:justify-between flex-wrap gap-y-8 w-full">

                    {
                        data.map((item,id)=>(

                            <div key={id} className=" w-full md:w-[49%] overflow-hidden flex justify-start flex-col bg-white px-5 py-8 gap-y-4 shadow-5xl ">
                                <h1 className="heading_1"> {item["title"]}</h1>
                                <p className="pragraph_1 -mt-2 pb-4">{item["des"]}</p>

                                <div className="w-full flex justify-between flex-col rounded  gap-y-5 ">
                                    <div className="w-full flex justify-between border-2 overflow-hidden gap-x-4">
                                        <Image className="object-cover rounded-lg w-1/2 lg:w-2/3 lg:h-[160px]" src={item["image1"]} width={325}  height={160} alt=""/>
                                        <Image className="object-cover rounded-lg w-1/2 lg:w-1/3 lg:h-[160px]" src={item["image2"]} width={170}  height={160} alt=""/>
                                    </div>
                                    <div className="w-full flex justify-between overflow-hidden gap-x-4">
                                        <Image className="object-cover rounded-lg w-[48%] lg:w-[245px]" src={item["image3"]} width={245} height={250} alt=""/>
                                        <Image className="object-cover rounded-lg w-[48%] lg:w-[250px]" src={item["image4"]} width={250} height={250} alt=""/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }






                </div>

            </div>

        </div>
    );
};

export default OurServices;