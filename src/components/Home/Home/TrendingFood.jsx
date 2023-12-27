import { useEffect, useState } from "react";
import SingleTrendingFood from "./SingleTrendingFood";

const TrendingFood = () => {

    const [trendingFood, setTrendingFood] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/food")
            .then(res => res.json())
            .then(data => setTrendingFood(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 gap-3 mt-20">
            {
                trendingFood.map(food => <SingleTrendingFood key={food.id} food={food} />)
            }
        </div>
    );
};

export default TrendingFood;