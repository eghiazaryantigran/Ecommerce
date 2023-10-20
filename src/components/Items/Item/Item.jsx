import React from "react";


const Item=(props)=>{
    return(
        <div className='item'>
            <img src={"./img/" + props.items.img} alt="" onClick={()=>props.OnshowItem(props.items)}/>
            <h2>{props.items.title}</h2>
            <p>{props.items.desc}</p>
            <b>{props.items.price}$</b>
            <div className="add_to_cart" onClick={() => props.onAdd(props.items)}>+</div>
        </div>
    )
}


export default Item;