import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi'
import OrderItem from "./OrderItem";

export default function OrdersList({data}){

    // console.log("Data: ")
    // console.log(data.orders)
    let dataList = data.orders.map((item)=>{
        // console.log(item._id)
        return <OrderItem key={item._id} id={item._id} customer_id={item.customer_id} restaurant_id={item.restaurant_id} order_date={item.order_date } items={item.items}/>
    })



    return(
        <ul>
            {dataList}
        </ul>
    )
}