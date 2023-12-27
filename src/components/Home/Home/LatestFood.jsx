import { useEffect, useState } from "react";
import SingleLatestFood from "./SingleLatestFood";

const LatestFood = () => {
    const [latestFoods, setLatestFoods] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/latestFood")
            .then(res => res.json())
            .then(data => setLatestFoods(data))
    }, [])
    return (
        <div className="my-10">
            {latestFoods.map(food => <SingleLatestFood key={food.id} food={food} />)}
        </div>
    );
};

export default LatestFood;