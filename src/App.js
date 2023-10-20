import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import Items from "./components/Items/Items";
import Categorie from "./components/Categories/Categories";
import ShowItem from "./components/ShowFullItem/ShowFullItem";

function App() {

    const [items,Setitems]=useState([

            {
                id: 1,
                title: "Սեղան",
                img:"1.jpg",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                category: "table",
                price: "49.00"
            },


            {
                id: 2,
                title: "Անկողին",
                img: "2.jpg",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                category: "bed",
                "price": "149.00"
            },
            {
                id: 3,
                title: "Սեղանիկ",
                img: "3.jpg",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                category: "table",
                "price": "90.00"
            },
            {
                id: 4,
                title: "Բնական Փայտից Աթոռ",
                img: "4.jpg",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                category: "chairs",
                "price": "80.00"
            },
            {
                id: 5,
                title: "Զգեստա Պահարան",
                img: "5.jpg",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                category: "wardrobe",
                price: "200.00"
            },

        {
            id: 6,
            title: "Սեղան",
            img:"6.jpg",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            category: "table",
            price: "49.00"
        },

        {
            id: 7,
            title: "Սեղան",
            img:"7.jpg",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            category: "table",
            price: "49.00"
        },

    ])

    const [orders,setOrders]=useState([])

    const [currentItems,setcurrentItems]=useState(items)


    const[ShowFullItem,setShowFullItem]=useState(false)

    const[fullItem,setFullItem]=useState({})


    const chooseCategory = (category) => {
        if (category=="all"){
            return setcurrentItems(items);
        }else {

            const filteredItems = items.filter((el) => el.category === category);
            return setcurrentItems(filteredItems);
        }
    };


    let OnshowItem = (item) => {
        setFullItem(item);
        setShowFullItem(!ShowFullItem);
    }


    let deleteOrder=(itemId)=>{
        const deleteOrders = orders.filter((el) => el.id !== itemId);
        setOrders(deleteOrders);
    }

    let addToOrder=(item)=>{
let isAnyArray=false;
        orders.forEach(el=>{
            if(el.id=== item.id){
                isAnyArray=true
            }
        })

        if(!isAnyArray) {

            setOrders([...orders, item])
            console.log(item)
        }
    }

  return (
    <div className="wrapper">

      <Header orders={orders} onDelete={deleteOrder}/>
        < Categorie chooseCategory={chooseCategory}/>
        <Items items={currentItems} onAdd={addToOrder} OnshowItem={OnshowItem}/>

        {
            ShowFullItem && <ShowItem item={fullItem} onAdd={addToOrder} OnshowItem={OnshowItem}/>
        }

      <Footer/>
   </div>
  );
}

export default App;
