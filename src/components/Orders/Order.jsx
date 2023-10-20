import React from "react";
import {BsFillTrashFill} from "react-icons/bs"


const Order=(props)=>{
    return(

<div className="item">
    <img src={"./img/" + props.item.img} alt="" />
    <h2>{props.item.title}</h2>
    <b>{props.item.price}$</b>
    <BsFillTrashFill className="delete_icon" onClick={() => props.onDelete(props.item.id)}/>
</div>


    )

}


export default Order;