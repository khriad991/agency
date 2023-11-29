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
                <div className="flex justify-between flex-wrap gap-y-5 w-full">

                    {
                        data.map((item,id)=>(

                            <div key={id} className="w-[49%] overflow-hidden flex justify-start flex-col bg-white px-5 py-6 gap-y-6 my-3 shadow-5xl ">
                                <h1 className="heading_1"> {item["title"]}</h1>
                                <p className="pragraph_1 -mt-2 pb-4">{item["des"]}</p>

                                <div className="flex flex-col w-full gap-y-4 -mt-2 ">
                                    <div className="w-1/2 flex justify-between gap-x-4 w-full ">
                                        <Image className="object-cover rounded-lg" src={item["image1"]} width={325}  height={150} alt=""/>
                                        <Image className="object-cover rounded-lg" src={item["image2"]} width={170}  height={150} alt=""/>
                                    </div>
                                    <div className="w-1/2 flex justify-between gap-x-4">
                                        <Image className="object-cover rounded-lg" src={item["image3"]} width={245}  height={250} alt=""/>
                                        <Image className="object-cover rounded-lg" src={item["image4"]} width={250}  height={250} alt=""/>
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