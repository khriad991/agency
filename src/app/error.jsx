"use client";
import Link from "next/link";

const Error = () => {
    return (
        <div className="bg-gray1">
            <div className="container flex justify-start">
                <div className=" flex justify-center items-center flex-col gap-y-8 w-screen h-screen">
                    <h1 className="text-red-400 font-bold text-4xl capitalize">!! some thing Went Wrong !!</h1>
                    <Link className="btn-green bg-white shadow-4xl text-black font-bold px-8 " href="/"> Back Home</Link>
                </div>
            </div>
        </div>
    );
};
export default Error;