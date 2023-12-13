import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi'





export default async function OrderItemItem({menu_item_id,quantity}){
    


    return(
        <li className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded bg-slate-300">
            <div>
                <p>Menu item id: {menu_item_id}</p>
                <p>Quantity: {quantity}</p>
            </div>
     
        </li>


    )
}