import React from 'react';
import ChildHero from "@/components/Team/ChildHero";
import Subscribe from "@/components/home/Subscribe";
import Projects from "@/components/projects/Projects.";

const Page = () => {
    return (
        <>
          <ChildHero heading="All Project"/>
            <Projects/>
          <Subscribe/>
        </>
    );
};

export default Page;