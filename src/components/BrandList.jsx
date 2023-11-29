import React from 'react';
import Image from "next/image";

const BrandList = () => {
    return (
        <div className="bg-white py-6">
            <div className="container flex justify-between items-center flex-wrap md:flex-nowrap ">
                <Image src="/assets/logos_google.svg" alt="logo" width={100} height={30}/>
                <Image src="/assets/logos_monday.svg" alt="logo" width={140} height={30}/>
                <Image src="/assets/Trello.png" alt="logo" width={156} height={30}/>
                <Image src="/assets/Notion.png" alt="logo" width={100} height={50}/>
            </div>
        </div>
    );
};

export default BrandList;