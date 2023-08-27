import { Link, NavLink } from "react-router-dom";
import {
  SquaresPlusIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/solid";
import logo from '../assets/logo1.png'

const Sideber = () => {
  return (
    <div className="h-screen sticky top-0 left-0 border-r-2  border-r-gray-300">
      <div className="flex flex-col items-center gap-5 h-full py-5 md:ml-5 md:mr-5">
        <Link to='/'>
            <img src={logo} alt="" className="w-10 mt-2 mb-6"/>
        </Link>
        <NavLink
         to="/"
         className={({ isActive }) =>
           isActive
             ? 'p-2 rounded-xl bg-blue-600 text-white  cursor-pointer'
             : 'p-2 rounded-xl group hover:bg-blue-600  text-gray-500 cursor-pointer transition-all'
         }
        >
          <SquaresPlusIcon className="w-9 h-9 group-hover:text-white" />
        </NavLink>
        <NavLink 
        to="/chat"
        className={({ isActive }) =>
          isActive
            ? 'p-2 rounded-xl bg-blue-600 text-white  cursor-pointer'
            : 'p-2 rounded-xl group hover:bg-blue-600 text-gray-500 cursor-pointer transition-all'
        }
        >
          <ChatBubbleOvalLeftEllipsisIcon className="w-9 h-9 group-hover:text-white"/>
        </NavLink>

        <NavLink
        to='/profile'
        className={({isActive})=>
            isActive ? 'p-2 rounded-xl bg-blue-600 text-white cursor-pointer'
            : 'p-2 rounded-xl hover:bg-blue-600 hover:text-white text-gray-500 cursor-pointer transition-all'
        }
        >
          <Cog6ToothIcon className="w-9 h-9 group-hover:text-white"/>
        </NavLink>

        <NavLink
        to='/profile'
        className={({isActive})=>
            isActive ? 'p-2 rounded-xl bg-blue-600 text-white cursor-pointer mt-40'
            : 'p-2 rounded-xl hover:bg-blue-600 hover:text-white text-gray-500 cursor-pointer transition-all mt-40'
        }
        >
          <UserCircleIcon className="w-9 h-9 group-hover:text-white"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Sideber;
