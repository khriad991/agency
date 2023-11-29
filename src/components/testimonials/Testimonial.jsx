import React from 'react';
import SectionTitle from "@/components/home/SectionTitle";
import Image from "next/image";

const getData =async () => {
    const res = await fetch(`${process.env.BASEURL}/api/TestimonialList`)
    if(!res.ok){
        throw new Error("TestimonialList calling Fail")
    }
    return res.json();
}

const Testimonial =async () => {
    let data = await  getData();
    return (
        <div className="bg-white py-10">
            <div className="container">
                <SectionTitle name="Testimonial List" title="Better Agency/SEO Solution At Your Fingertips"/>
                <div className="flex justify-evenly flex-wrap gap-y-6 ">
                    {
                        data.map((item,id)=>(

                            <div key={id} className="w-[31%] px-6 py-8 centerFlex flex-col gap-y-5 rounded-lg shadow-5xl ">
                                <div className="">
                                    <Image className="object-cover rounded-xl" src={item["image"]} alt="image" width={100} height={100}/>
                                </div>
                                <p className="pragraph_1 text-justify ">{item['msg']}</p>
                                <h1 className="heading_1">{item["name"]}</h1>
                                <h2 className='text-base font-medium text-[#000] -mt-3'>{item["designation"]}</h2>
                            </div>

                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default Testimonial;