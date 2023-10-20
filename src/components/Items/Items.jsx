import React from "react";
import Item from "./Item/Item";


const Items=(props)=>{
    return(

        <main>
            {props.items.map(p => (
                <Item items={p} key={p.id} onAdd={props.onAdd} OnshowItem={props.OnshowItem}/>
            ))}
        </main>
    )
}


export default Items;