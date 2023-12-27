import { Link } from "react-router-dom";

const ListItem = ({ route }) => {
    return (
        <div>
            <li className="mr-12 mt-5 hover:text-[#ff4a52]">
                <Link to={route.path}>{route.name}</Link>
            </li>
        </div>
    );
};

export default ListItem;