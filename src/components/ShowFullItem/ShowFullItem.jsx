
import React from "react";
import {GrClose} from "react-icons/gr"

let ShowItem=(props)=>{
console.log(props.item)
    return(
        <div className="full_item">
            <div>
                <GrClose className="close" onClick={()=>props.OnshowItem(props.item)}/>
            <img src={"./img/" + props.item.img} alt="" onClick={()=>props.OnshowItem(props.item)}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className="add_to_cart" onClick={() => props.onAdd(props.item)}>+</div>
            </div>
        </div>
    )
}


export default ShowItem;