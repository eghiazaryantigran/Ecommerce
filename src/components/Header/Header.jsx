import React, {useState} from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "../Orders/Order";
import ShowOrders from "../showorders/showorders";
import ShowNothing from "../shonothing/showNothing";




const Header=(props)=>{
    console.log(props.orders)
    const[cartopen,Setcartopen]=useState(false)
    return(
       <header>

           <div>
               <span className={'logo'}>LAV ATOR</span>
               <ul className={'nav'}>
                   <li>Մեր մասին</li>
                   <li>Կապ Մեզ Հետ</li>
                   <li>Անձնական էջ</li>
               </ul>
               <FaShoppingBasket className={`shop_cart_button && ${cartopen && "active"}`} onClick={() => Setcartopen(!cartopen)} />
               {
                   cartopen
                   &&
                   (
                       <div className="shop_cart">
                           {props.orders.length > 0 ? (
                               <ShowOrders orders={props.orders} onDelete={props.onDelete}/>
                           ) : (
                               <ShowNothing/>
                           )}
                       </div>
                   )
               }

           </div>

           <div className={'presentation'}></div>
       </header>
    )
}


export default Header;