import React from "react";
import App from "./components/App";
import Authors from "./components/Authors"
import Images from "./components/Images"
import Users from "./components/Users"
import Bookshelf from "./components/Bookshelf";
import Logout from "./components/Logout";
import ReactDOM from "react-dom";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById("root");

const routes = [
    {
        path:"/",
        element: <App/>
    },{
        path: "/authors",
        element: <Authors />
    },{
        path: "/images",
        element: <Images />
    },{
        path: "/users",
        element: <Users />
    },{
        path: "/logout",
        element: <Logout />
    },{
        path: "/users_books",
        element: <Bookshelf />
    }
]

const router = createBrowserRouter(routes)
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
