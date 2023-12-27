import { MdOutlineWatchLater } from "react-icons/md";


const SingleLatestFood = ({ food }) => {
    const { name, image, title, date, serial } = food;
    return (
        <div className="card card-side  ronded mb-5 h-[180px] w-full relative">
            <img className="rounded-xl h-[180px] px-2" src={image} alt="food" />
            <span className="bg-[#D34249] h-5 w-5 p-4 absolute left-40 -bottom-1 flex items-center justify-center  rounded-full text-center text-white">{serial}</span>
            <div className=" px-8 space-y-5">
                <p className="text-red-500">{name}</p>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="flex items-center gap-2"><MdOutlineWatchLater className="text-red-500" />{date}</p>
            </div>
        </div>
    );
};

export default SingleLatestFood;