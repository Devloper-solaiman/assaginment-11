import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home/Home";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Login/Signup";
import Reviews from "../../Components/Reviews/Reviews";

import Blogs from "../../Components/Blogs/Blogs";
import ChakOut from "../../Components/ChakOut/ChakOut";
import Myitem from "../../Components/Myitem/Myitem";
import AllItems from "../../Components/InventoryItems/AllItems/AllItems";
import AddItem from "../../Components/AddItem/AddItem";
import ManageItems from "../../Components/ManageItems/ManageItems";
import UpdateItems from "../../Components/ManageItems/UpdateItems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chakout/:id',
                element: <ChakOut></ChakOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addItem',
                element: <AddItem></AddItem>
            },
            {
                path: '/manageItems',
                element: <ManageItems></ManageItems>,
                loader: () => fetch('http://localhost:5000/userproduct')
            },
            {
                path: '/myitem',
                element: <Myitem></Myitem>
            },
            {
                path: '/allitems',
                element: <AllItems></AllItems>
            },
            {
                path: '/update/:id',
                element: <UpdateItems></UpdateItems>,
                loader: ({ params }) => fetch(`http://localhost:5000/userproduct/${params.id}`)
            },
            {
                path: '/update',
                element: <UpdateItems></UpdateItems>
            }

        ]
    },
])

export default router;