import React from 'react';
import Image from "next/image";
import SectionTitle from "@/components/home/SectionTitle";

const getData = async () => {
    const res = await fetch(`${process.env.BASEURL}/api/FeaturedProject`)
    if(!res.ok){
        throw  new Error("FeaturedProject Calling Fail")
    }
    return res.json();
}
const FeaturedProject = async  () => {
    let data = await getData()
        data = data.slice(0,4)

    return (
        <div className="bg-green2 py-10">
            <div className="container">
                <SectionTitle
                    name="featured project"
                    title="We provide the Perfect Solution to your business growth"
                />
                <div className="flex justify-between flex-wrap lg:flex-nowrap gap-y-8 gap-x-5 mt-4 pt-2 pb-8">
                    <div className="w-full lg:w-1/2 flex justify-start items-start">
                        <Image className="w-full object-cover w-[600px] h-[530px] rounded-2xl" width={600} height={530} src={data["0"]["image"]} alt=""/>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-between items-center flex-wrap gap-y-8 gap-x-5 ">
                        {
                            data.map((item, id)=>(
                                <div key={id} className="w-[47%] flex justify-start flex-col gap-y-4">
                                    <Image className="object-center rounded-xl w-[280px] h-[180px]" width={280} height={180} src={item["image"]} alt=""/>
                                    <p className="text-sm font-normal text-heading-second">
                                        App Design - {new Date(item?.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                    </p>
                                    <h2 className="text-heading-second text-ld font-bold">{item["title"]}</h2>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;