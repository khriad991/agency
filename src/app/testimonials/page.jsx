import React from 'react';
import ChildHero from "@/components/Team/ChildHero";
import Subscribe from "@/components/home/Subscribe";
import Testimonial from "@/components/testimonials/Testimonial";

const Page = () => {
    return (
        <>
          <ChildHero heading='Testimonial List'/>
            <Testimonial/>
          <Subscribe/>
        </>
    );
};

export default Page;