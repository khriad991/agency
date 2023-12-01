import React from 'react';
import Link from "next/link";
import {FaFacebook, FaLinkedinIn} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {GrInstagram} from "react-icons/gr";

const Footer = () => {
    return (
        <div className="bg-black text-white py-10">
                <div className="container ">
                    <div className=" flex justify-between  w-full flex-col md:flex-row gap-y-10  ">
                        <div className=" w-full  basis-3/12 flex flex-col gap-y-4">
                            <h1 className="text-4xl font-bold">web logo</h1>
                            <p className="text-lg font-normal mr-16 text-justify">Some footer text about the  Agency. Just a  little <br/>description to help people understand you better</p>
                            <div className="icon-box flex justify-start items-center gap-x-4">
                                <Link className="bg-green3 w-10 h-10 centerFlex  rounded-full" href="/">
                                    <FaFacebook className="text-xl bg-transparent text-white font-bold " />
                                </Link>
                                <Link className="bg-green3 w-10 h-10 centerFlex  rounded-full" href="#">
                                    <AiFillTwitterCircle className="text-xl bg-transparent text-white font-bold " />
                                </Link>
                                <Link className="bg-green3 w-10 h-10 centerFlex  rounded-full" href="#">
                                    <FaLinkedinIn className="text-xl bg-transparent text-white font-bold " />
                                </Link>
                                <Link className="bg-green3 w-10 h-10 centerFlex  rounded-full" href="#">
                                    <GrInstagram className="text-xl bg-transparent text-white font-bold " />
                                </Link>

                            </div>
                        </div>
                        <div className=" w-full basis-3/12 flex flex-col gap-y-6">
                            <h4 className="text-lg font-semibold font-avenir">quick link</h4>
                            <Link href="/services" className="text-lg text-[#fff] font-avenir font-medium capitalize hover:text-green3 myTransition ">services</Link>
                            <Link href="#" className="text-lg text-[#fff] font-avenir font-medium capitalize  hover:text-green3 myTransition">About Us </Link>
                            <Link href="#" className="text-lg text-[#fff] font-avenir font-medium capitalize  hover:text-green3 myTransition">Contact Us</Link>
                        </div>

                        <div className=" w-full basis-3/12 flex flex-col gap-y-4">
                            <h4 className="text-lg font-semibold font-avenir">address</h4>
                            <p className="text-lg text-[#fff] font-avenir font-medium capitalize ">
                                Design Agency Head Office <br/>
                                Airport Road <br/>
                                United Arab Emirate
                            </p>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;