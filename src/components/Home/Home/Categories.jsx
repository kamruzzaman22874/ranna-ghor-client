import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="my-8">
            {categories.map(food => <Category key={food.name} food={food} />)}
        </div>
    );
};

export default Categories;