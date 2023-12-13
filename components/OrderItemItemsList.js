import OrderItemItem from "./OrderItemItem"


export default function OrderItemItemsList({items}){

    // console.log(items)
    let itemsList = items.map((item)=>{
        // console.log(item._id)
        return <OrderItemItem   key={item._id} menu_item_id={item.menu_item_id} quantity={item.quantity}/>
    })


    return(
        <ul>
            {itemsList}
        </ul>
    )
}