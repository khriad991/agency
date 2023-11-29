"use client"
import {usePathname} from "next/navigation";
import {FaGreaterThan} from "react-icons/fa";

const ChildHero = ({heading}) => {

    let  path = usePathname()
    let pathName = path.split("/")[1]

    return (
        <div className="bg-gray1 py-10">
            <div className="container">
                <div className="flex justify-start flex-col py-16 ">
                    <h1 className="text-4xl font-semibold font-jakarta capitalize ">{heading}</h1>
                    <div className="flex justify-start py-5 ">
                        <div className="flex justify-start items-center bg-amber-200 gap-x-2">
                            <p className="text-base text-black font-semibold font-jakarta capitalize">home </p>
                            <p className="text-base text-black font-medium mt-[1.5px] font-jakarta "><FaGreaterThan /></p>
                            <p className="text-base text-green3 font-semibold font-jakarta capitalize">{pathName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildHero;