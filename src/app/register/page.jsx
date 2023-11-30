import React from 'react';
import ChildHero from "@/components/Team/ChildHero";
import Subscribe from "@/components/home/Subscribe";

const Page = () => {
    return (
        <>
          <ChildHero/>
            <div className="bg-green2 w-full py-20 ">
                <div className="container py-32 flex justify-center items-center">

                    <h1 className="text-green3 text-3xl font-bold text-center capitalize">Up coming</h1>
                </div>
            </div>
          <Subscribe/>
        </>
    );
};

export default Page;