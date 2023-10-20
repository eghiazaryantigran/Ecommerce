import React, {useState} from "react";


const Categories=(props)=>{
    const[categories,setCategories]=useState([
        {
        key:"all",
        name:"Բոլորը"
    },
        {
            key:"chairs",
            name:"Աթոռներ"
        },

        {
            key:"table",
            name:"Սեղաններ"
        },

        {
            key:"wardrobe",
            name:"Զգեստա Պահարաններ"
        },
        {
            key:"bed",
            name:"Անկողիններ"
        },
    ])

    return(
        <div className="categories">
            {/* Render currentItems */}
            {categories.map((item) => (
                <div key={item.key} onClick={()=>props.chooseCategory(item.key)}>
                  {item.name}
                    <img src={item.img} alt={item.title} />
                </div>
            ))}
        </div>
    )
}


export default Categories;