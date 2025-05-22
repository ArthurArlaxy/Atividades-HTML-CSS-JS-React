import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { NewItem } from "./pages/NewItem";
import { ItemsLayout } from "./pages/ItemsLayout";
import { Items } from "./pages/Items";
import { Item } from "./pages/Item";
import { ItemLoader } from "./loaders/ItemLoader";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[{
            index:true,
            element:<Dashboard/>,
        },{
            path:"itens",
            element:<ItemsLayout/>,
            children:[{
                index:true,
                element:<Items/>,
            },{
                path:"/itens/newItens",
                element:<NewItem/>
            },{
                path:"/itens/:itemId",
                loader: ItemLoader,
                element:<Item/>,
                errorElement:<Error/>
            }]
        }]
    }
])