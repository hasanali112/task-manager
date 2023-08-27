import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";


const MainLayOut = () => {
    return (
        <div className="flex ">
           <Sideber></Sideber>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;