import React from 'react';
import ChildHero from "@/components/Team/ChildHero";
import Subscribe from "@/components/home/Subscribe";
import OurServices from "@/components/services/OurServices";

const Page = () => {
    return (
        <>
            <ChildHero heading="Our Services"/>
            <OurServices />
            <Subscribe/>
        </>
    );
};

export default Page;