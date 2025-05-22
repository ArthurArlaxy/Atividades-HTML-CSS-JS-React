import {createBrowserRouter,} from 'react-router-dom';
import { MainLayout } from "./components/Mainlayout";
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { LoadProduct } from './loaders/LoadProduct';
import { ProductErrorBoundary } from './Error-Boundaries/ProductBoundary';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[{
            index:true,
            element:<Home/>
        },
        {
            path:'products',
            element:<Products/>
        },{
            path:"products/:productId", //Rota dinâmica com parametros
            element:<Product/>,
            loader: LoadProduct,
            errorElement:<ProductErrorBoundary/>
        },{
            path:'cart',
            element:<Cart/>
        }]
    }
])