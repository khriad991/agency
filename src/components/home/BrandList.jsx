import React from 'react';
import Image from "next/image";

const getData  =async () => {
    const res = await fetch(`${process.env.BASEURL}/api/BrandList`)
    if(!res.ok){
        throw new Error("BrandList calling Fail")
    }
        return  res.json()

}

const BrandList =async () => {
    const data = await getData();

    return (
        <div className="bg-white py-6">
            <div className="container flex justify-between items-center flex-wrap lg:flex-nowrap">
                {
                    data.map((item,id)=>(
                        <Image  key={id} src={item["image"]} alt={item["name"]} width={130} height={50}/>
                    ))
                }
            </div>
        </div>
    );
};

export default BrandList;