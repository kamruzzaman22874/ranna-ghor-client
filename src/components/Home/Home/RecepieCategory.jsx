import Categories from "./Categories";
import Updates from "./Updates";

const RecepieCategory = () => {
    return (
        <div className="grid mt-10">
            <h2 className="text-2xl mb-2">Recipe Categories</h2>
            <span>
                <hr className="w-20 top-0.5 relative border-[#ff4a52] border-2" />
                <hr className="" />
            </span>
            <Categories />
            <Updates />
        </div>
    );
};

export default RecepieCategory;