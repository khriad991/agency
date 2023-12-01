import React from 'react';
import SectionTitle from "@/components/home/SectionTitle";
import Image from "next/image";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const getData =async () => {
    const res =await fetch(`${process.env.BASEURL}/api/TeamList`)
    if(!res.ok){
        throw new Error("TeamList Calling fail")
    }
    return res.json();
}

const TeamMember = async () => {
    let data = await getData();
       data = data.slice(0, 3)
    return (
        <div className="bg-white py-10">
            <div className="container w-full">
                <SectionTitle name="Our Team Member" title="Check our awesome team members"/>
                <div className="centerFlex md:justify-around lg:justify-between flex-wrap lg:flex-nowrap md:gap-x-8 gap-y-6 w-full mt-6">
                    {
                        data.map((item,id)=>(
                            <div key={id} className="max-w-[390px] md:basis-[45%] lg:basis-[32%] flex flex-col bg-white shadow-4xl mb-8 lg:mb-0 rounded-b-xl">
                                <div className="w-[390px] relative z-0">
                                    <Image className="object-cover w-full rounded-t-xl" src={item["image"]} alt="team" width={390} height={387} />
                                    <div className=" flex items-end w-full h-full opacity-0 hover:opacity-100 bg-opacity-10 bg-black absolute bottom-0 left-0 z-10 myTransition ">
                                        <div className=" flex justify-center items-center bg-gray1 gap-x-3 py-4 px-8 mx-auto mb-8 w-[200px] px-20 rounded-3xl ">
                                            <a target="_blank" rel="noopener noreferrer" className=" border-r-2 border-[#737588] hover:text-green3 text-[#737588 myTransition" href={item["facebook"]}>
                                                <FaFacebook size={25} className="mr-4" />
                                            </a>
                                            <a target="_blank" className=" border-r-2 border-[#737588] hover:text-green3 text-[#737588 myTransition" href={item["twitter"]}>
                                                <FaTwitter size={25} className="mr-4" />
                                            </a>
                                            <a target="_blank" className="hover:text-green3 text-[#737588 myTransition" href={item["instagram"]}>
                                                <FaInstagram size={25} className="mr-4 "/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-2xl lg:text-3xl font-semibold text-heading-second text-center py-6">{item["name"]}</h1>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;