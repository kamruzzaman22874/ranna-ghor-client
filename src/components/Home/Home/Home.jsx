import Banner from "./Banner";
import ByHome from "./ByHome";
import Editiors from "./Editiors";
import FoodItem from "./FoodItem";
import TrendingRecepies from "./TrendingRecepies";

const Home = () => {
    return (
        <div>
            <Banner />
            <FoodItem />
            <TrendingRecepies />
            <Editiors />
            <ByHome />
        </div>
    );
};

export default Home;