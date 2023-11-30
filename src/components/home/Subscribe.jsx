import React from 'react';

const Subscribe = () => {
    return (
        <div className="bg-white py-12">
            <div className="container flex justify-center items-center">
               <div className="centerFlex gap-y-6 flex-col my-8 ">
                   <h4 className="text-xl font-medium uppercase text-green3 ">Subcribe</h4>
                   <h1 className="text-3xl text-black font-semibold text-center w-[495px] px-6 ">Subscribe to get the latest news about us</h1>
                   <p className="text-center text-[#888888] text-sm font-medium -mt-6 mb-4 "> Please drop your email below to get daily update about what we do</p>
                   <div className="w-full sm:w-[90%] md:w-[590px] centerFlex relative">
                       <input type="text"
                           placeholder="Enter your email address"
                           className="w-full py-4 px-6 rounded-lg border-2 border-[#8B8B8B] myTransition  focus:border-[#F55F1D] focus:placeholder:text-[#F55F1D] outline-0 "
                       />
                       <button className="outline-0 border-2 border-[#F55F1D] bg-[#F55F1D] text-white hover:text-[#F55F1D] hover:bg-white py-3 px-10 font-bold capitalize absolute top-1 right-[0.370rem] myTransition rounded-lg">Subscribe</button>
                   </div>

               </div>
            </div>

        </div>
    );
};

export default Subscribe;
