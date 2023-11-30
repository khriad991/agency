
const SectionTitle = ({name, title}) => {
    return (
        <div className="flex justify-start flex-col gap-y-4 ">
            <h2 className="title">{name}</h2>
            <h1 className=" text-2xl md:text-3xl font-semibold text-black max-w-[495px] mb-8 ">{title}</h1>
        </div>
    );
};

export default SectionTitle;