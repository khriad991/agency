import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-black text-white py-10">
                <div className="container flex justify-center items-start w-full flex-wrap lg:flex-nowrap gap-x-10 ">

                    <div className=" w-full lg:w-1/3 flex flex-col gap-y-4">
                        <h1 className="text-4xl font-bold">web logo</h1>
                        <p className="text-lg font-normal mr-16 text-justify">Some footer text about the  Agency. Just a little description to help people understand you better</p>
                        <div className="icon-box flex justify-start items-center gap-x-4">
                            <Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <circle cx="20.4092" cy="20.4092" r="20.4092" fill="#20B15A"/>
                                    <path d="M21.4915 29.1857V21.0995H24.2195L24.625 17.9335H21.4915V15.9169C21.4915 15.0033 21.7461 14.3778 23.0573 14.3778H24.7187V11.5552C23.9103 11.4685 23.0978 11.4267 22.2848 11.4299C19.8735 11.4299 18.218 12.9019 18.218 15.6042V17.9276H15.5078V21.0936H18.2239V29.1857H21.4915Z" fill="#F9F9F9"/>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <circle cx="20.5344" cy="20.4092" r="20.4092" fill="#20B15A"/>
                                    <path d="M30.4101 15.5396C29.7768 15.8203 29.0964 16.0099 28.3812 16.0956C29.1192 15.654 29.6713 14.959 29.9346 14.1402C29.2412 14.5521 28.4823 14.842 27.6909 14.9973C27.1588 14.4291 26.4539 14.0525 25.6857 13.9259C24.9176 13.7994 24.1291 13.93 23.4428 14.2974C22.7564 14.6649 22.2106 15.2487 21.8901 15.9581C21.5695 16.6676 21.4922 17.463 21.67 18.2209C20.265 18.1504 18.8906 17.7852 17.6359 17.1491C16.3812 16.513 15.2742 15.6202 14.3869 14.5286C14.0835 15.0519 13.9091 15.6587 13.9091 16.305C13.9087 16.8867 14.052 17.4596 14.3262 17.9727C14.6003 18.4858 14.9969 18.9233 15.4807 19.2464C14.9196 19.2286 14.3709 19.0769 13.8803 18.8042V18.8497C13.8802 19.6657 14.1624 20.4565 14.6791 21.088C15.1957 21.7196 15.915 22.1529 16.7147 22.3145C16.1943 22.4554 15.6486 22.4761 15.1189 22.3752C15.3445 23.0773 15.7841 23.6912 16.376 24.1311C16.9679 24.5709 17.6825 24.8147 18.4198 24.8282C17.1682 25.8107 15.6224 26.3437 14.0312 26.3414C13.7493 26.3414 13.4677 26.325 13.1877 26.2921C14.8029 27.3306 16.6831 27.8817 18.6034 27.8796C25.1037 27.8796 28.6573 22.4958 28.6573 17.8265C28.6573 17.6748 28.6535 17.5216 28.6466 17.3699C29.3378 16.87 29.9345 16.251 30.4086 15.5419L30.4101 15.5396Z" fill="#F9F9F9"/>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
                                    <circle cx="20.6597" cy="20.4092" r="20.4092" fill="#20B15A"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4391 26.5325H25.3039V21.6273C25.3039 20.4569 25.2842 18.9528 23.6751 18.9528C22.0441 18.9528 21.7949 20.2274 21.7949 21.5428V26.5325H18.6628V16.4443H21.6681V17.8239H21.7119C22.1294 17.031 23.1526 16.1944 24.6779 16.1944C27.8523 16.1944 28.4383 18.283 28.4383 20.9998L28.4391 26.5325ZM15.1281 15.067C14.8892 15.0672 14.6526 15.0203 14.4318 14.929C14.211 14.8376 14.0104 14.7036 13.8414 14.5347C13.6725 14.3657 13.5385 14.1651 13.4471 13.9443C13.3558 13.7235 13.3089 13.4869 13.3091 13.248C13.3091 12.8884 13.4157 12.5369 13.6154 12.2379C13.8151 11.939 14.099 11.7059 14.4312 11.5682C14.7634 11.4306 15.1289 11.3945 15.4815 11.4645C15.8342 11.5346 16.1582 11.7076 16.4126 11.9617C16.6669 12.2159 16.8402 12.5397 16.9105 12.8923C16.9809 13.2449 16.9451 13.6105 16.8077 13.9428C16.6703 14.275 16.4375 14.5591 16.1387 14.7591C15.8398 14.9591 15.4884 15.066 15.1289 15.0663L15.1281 15.067ZM16.6965 26.5325H13.5583V16.4443H16.6965V26.5325Z" fill="#F9F9F9"/>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <circle cx="20.4092" cy="20.4092" r="20.4092" fill="#20B15A"/>
                                    <path d="M21.4915 29.1857V21.0995H24.2195L24.625 17.9335H21.4915V15.9169C21.4915 15.0033 21.7461 14.3778 23.0573 14.3778H24.7187V11.5552C23.9103 11.4685 23.0978 11.4267 22.2848 11.4299C19.8735 11.4299 18.218 12.9019 18.218 15.6042V17.9276H15.5078V21.0936H18.2239V29.1857H21.4915Z" fill="#F9F9F9"/>
                                </svg>
                            </Link>

                        </div>
                    </div>

                    <div className=" w-full lg:w-1/3 flex flex-col gap-y-6">
                        <h4 className="text-lg font-semibold font-avenir">quick link</h4>
                        <Link href="#" className="text-lg text-[#fff] font-avenir font-medium capitalize ">services</Link>
                        <Link href="#" className="text-lg text-[#fff] font-avenir font-medium capitalize ">About Us </Link>
                        <Link href="#" className="text-lg text-[#fff] font-avenir font-medium capitalize ">Contact Us</Link>
                    </div>

                    <div className=" w-full lg:w-1/3 flex flex-col gap-y-4">
                        <h4 className="text-lg font-semibold font-avenir">address</h4>
                        <p className="text-lg text-[#fff] font-avenir font-medium capitalize ">
                            Design Agency Head Office <br/>
                            Airport Road <br/>
                            United Arab Emirate
                        </p>

                    </div>

                </div>
        </div>
    );
};

export default Footer;