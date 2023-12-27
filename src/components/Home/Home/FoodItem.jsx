import { useEffect, useState } from "react";
import SingleFood from "./SingleFood";

const FoodItem = () => {

    const [foodsItem, setFoodsItem] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoodsItem(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
            {
                foodsItem.map(food => <SingleFood key={food.id} food={food} />)
            }
        </div>
    );
};

export default FoodItem;