import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi'
import OrderItemItemsList from "./OrderItemItemsList";





export default async function OrderItem({id,customer_id,restaurant_id,order_date,items}){
    


    return(
        <li className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
                <h2>Order Id: {id}</h2>
                <div>Customer Id: {customer_id}</div>
                <div>Restaurant Id: {restaurant_id}</div>
                <div>Order Date: {order_date}</div>
                <OrderItemItemsList items={items}/>
            </div>
            <div className="flex gap-2">
                <RemoveBtn id={id}/>
                <Link href={`editOrder/${id}`}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>




        </li>


    )
}