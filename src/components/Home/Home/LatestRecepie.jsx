import LatestFood from "./LatestFood";
import advetiseImg from "../../../assets/Images/advertigement.jpg"
import RecepieCategory from "./RecepieCategory";

const LatestRecepie = () => {
    return (
        <div className="grid mt-10">
            <h2 className="text-2xl mb-2">Latest Recipes</h2>
            <span>
                <hr className="w-20 top-0.5 relative border-[#ff4a52] border-2" />
                <hr className="" />
            </span>
            <LatestFood />
            <img className="h-[300px] w-full" src={advetiseImg} alt="" />
            <RecepieCategory />
        </div>
    );
};

export default LatestRecepie;