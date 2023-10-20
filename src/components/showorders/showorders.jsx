import React from "react";
import Order from "../Orders/Order";

let ShowOrders=(props)=>{
    let amount=0;
    props.orders.forEach((element)=>{amount =amount+Number.parseFloat(element.price)})

    return(
        <div>
            {props.orders.map((a) => (
                <Order key={a.id} item={a} onDelete={props.onDelete}/>
            ))}
            <hr/>
            <p className="amount">Գումարը {new Intl.NumberFormat().format(amount) }$</p>
        </div>
    )
}


export default ShowOrders;