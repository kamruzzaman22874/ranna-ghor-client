const Category = ({ food }) => {
    const { name, quantity } = food;
    return (
        <div className="flex justify-between space-y-3">
            <h2 className="hover:text-[#FF4A52]">{name}</h2>
            <h3>{quantity}</h3>
        </div>
    );
};

export default Category;