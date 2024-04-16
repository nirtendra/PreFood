
import {Routes, Route} from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage"
import { ProductsList } from "../pages/Products/ProductsList"
import{ ProductDetail} from "../pages/ProductDetail"
import { Search } from "react-bootstrap-icons"
import { OrderPage } from "../pages/Order/OrderPage"


export const AllRoutes =()=>{

    return(

        <>
        
        <Routes>
           <Route path ="/" element={<HomePage/>} />
           <Route path ="/products" element={<ProductsList/>}/>
           <Route path ="/products/:id" element={<ProductDetail/>}/>
           {/* <Route path="/search" element={<Search/>}/> */}
           <Route path="/order/:productId" element={<OrderPage />} />



        </Routes>
        
        </>
    )
}