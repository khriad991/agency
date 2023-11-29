import React from 'react';
import Subscribe from "@/components/home/Subscribe";
import ChildHero from "@/components/Team/ChildHero";
import TeamMember from "@/components/Team/TeamMember";

const Page = () => {
    return (
        <>
            <ChildHero heading="out team"/>
            <TeamMember/>
            <Subscribe/>
        </>
    );
};

export default Page;