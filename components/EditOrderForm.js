'use client'
import Link from "next/link"
import EditMenuList from "./EditMenuList"
import { useContext } from "react"
import { useRouter } from "next/navigation"


const getOrder =async(id)=>{
    
    // console.log(id)
    try {
        const res = await fetch(`http://localhost:3000/api/orders/${id}`,{
            cache:"no-store"
        })
        if(!res.ok){
            throw new Error('failed to fetch order')
        }
  
        return res.json()
  
        
    } catch (error) {
        console.log(error)
    }
}






export default async function EditOrderForm({id}){

    const router = useRouter()
    const {order} = await getOrder(id)
    // console.log(order.items)
    var menu = order.items
    var dishes = menu.map((item)=>{
        return {menu_item_id:item.menu_item_id, quantity:item.quantity}
    })


    const onQuantityChange = (id,quantity)=>{
        for(let i of dishes){
            if(i.menu_item_id==id){
                i.quantity=quantity
                console.log(i.quantity)
            }
        }
    }


    const editOrder = async()=>{

        let items = dishes.map((item)=>{
            
            return {menu_item_id:item.menu_item_id, quantity:item.quantity.toString()}
        })
        // console.log('items')
        // console.log(items)
        items = items.filter(item=>item.quantity!="0")
        const customer_id = order.customer_id
        const restaurant_id = order.restaurant_id
        const order_date = order.order_date
        try {
            const res = await fetch(`http://localhost:3000/api/orders/${id}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({customer_id,restaurant_id,order_date,items})
                    
            })
            if(res.ok){
                // console.log('updated order')
                // console.log(res)
                router.refresh()
            }else{
                throw new Error('error while posting order')
            }
        } catch (error) {
            console.log(error)
        }
    }


    
    return(
        
        <div className="flex-col justify-between gap-5 ">
            
            <EditMenuList menu={menu} onChange={onQuantityChange} />
            <Link onClick={editOrder} href="/" className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-30">
                Edit order
            </Link>
        </div>
            
            
            
            
        
        
    )
}