import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Tasks from "../Pages/Tasks";
import Chat from "../Pages/Chat";
import Profile from "../Pages/Profile";
import Setting from "../Pages/Setting";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            index: true,
            element:<Tasks></Tasks>
        },
        {
            path:'/chat',
            element:<Chat></Chat>
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
        {
            path:'/setting',
            element:<Setting></Setting>
        }
      ]
    },
  ]);
  