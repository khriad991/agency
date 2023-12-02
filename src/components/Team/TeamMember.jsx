import SectionTitle from "@/components/home/SectionTitle";
import Image from "next/image";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const getData =async () => {
    const res =await fetch(`${process.env.BASEURL}/api/TeamList`)
    if(!res.ok){
        throw new Error("TeamList Calling fail")
    }
    return res.json();
}

const TeamMember = async () => {
    let data = await getData();
       data = data.slice(0, 3)
    return (
        <div className="bg-white py-10">
            <div className="container ">
                <SectionTitle name="Our Team Member" title="Check our awesome team members"/>
                <div className="centerFlex md:justify-around lg:justify-between flex-wrap lg:flex-nowrap md:gap-x-8 gap-y-10 w-full mt-6">
                    {
                        data.map((item,id)=>(
                            <div key={id} className="w-[390px] md:w-[45%] lg:[390px] flex flex-col bg-white shadow-4xl rounded-b-xl">
                                <div className="w-full relative z-0">
                                    <Image className="object-cover w-full rounded-t-xl" src={item["image"]} alt="team" width={390} height={387} />
                                    <div className=" flex items-end w-full h-full opacity-0 hover:opacity-100 bg-opacity-10 bg-black absolute bottom-0 left-0 z-10 myTransition ">
                                        <div className=" flex justify-center items-center bg-gray1 gap-x-3 py-4 px-8 mx-auto mb-8 w-[200px] px-20 rounded-3xl ">
                                            <Link  className=" border-r-2 border-[#737588] hover:text-green3 text-[#737588 myTransition" href="#">
                                                <FaFacebook size={25} className="mr-4" />
                                            </Link>
                                            <Link className=" border-r-2 border-[#737588] hover:text-green3 text-[#737588 myTransition" href="#">
                                                <FaTwitter size={25} className="mr-4" />
                                            </Link>
                                            <Link className="hover:text-green3 text-[#737588 myTransition" href="#">
                                                <FaInstagram size={25} className="mr-4 "/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-2xl lg:text-3xl font-semibold text-heading-second text-center py-6">{item["name"]}</h1>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;