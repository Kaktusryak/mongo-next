'use client'
import Link from "next/link"
import MenuList from "./MenuList"
import { useContext } from "react"
import { useRouter } from "next/navigation"



const getMenu =async(id)=>{
    
    // console.log(id)
    try {
        const res = await fetch('http://localhost:3000/api/restaurants/' + id,{
            cache:"no-store"
        })
        if(!res.ok){
            throw new Error('failed to fetch orders')
        }
  
        return res.json()
  
        
    } catch (error) {
        console.log(error)
    }
}

export default async function Menu(){
    const router = useRouter();
    
    
    

    




    
    const getList=async()=>{
        const jsonRestaurantId = localStorage.getItem("restaurantId")
        const restaurantId = JSON.parse(jsonRestaurantId)
        const res = await getMenu(restaurantId)
    
        const menu = res.restaurant.menu
        return menu
    }
    const getRestId=async()=>{
        const jsonRestaurantId = localStorage.getItem("restaurantId")
        const restaurantId = JSON.parse(jsonRestaurantId)
        return restaurantId
    }
    var menu = await getList()
    var restId = await getRestId()
    

    let dishes = menu.map((item)=>{
        return {menu_item_id:item._id, quantity:0}
    })
    
    const onQuantityChange = (id,quantity)=>{
        for(let i of dishes){
            if(i.menu_item_id==id){
                i.quantity=quantity
                console.log(i.quantity)
            }
        }
    }
    
    const makeOrder = async()=>{
        const jsonCustomerId = localStorage.getItem("customerId")
        const jsonRestaurantId = localStorage.getItem("restaurantId")
        const jsonDate = localStorage.getItem("date")
        const customer_id = JSON.parse(jsonCustomerId)
        const restaurant_id = JSON.parse(jsonRestaurantId)
        const order_date = JSON.parse(jsonDate)
        console.log(dishes)
        let items = dishes.map((item)=>{
            
            return {menu_item_id:item.menu_item_id, quantity:item.quantity.toString()}
        })
        items = items.filter(item=>item.quantity!="0")
        
        // alert(items)
        try {
            const res = await fetch("http://localhost:3000/api/orders/",{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({customer_id,restaurant_id,order_date,items})
                    
            })
            if(res.ok){
                console.log('posted order')
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
            <p>Restaurant id: {restId}</p>
            <MenuList menu={menu} onChange={onQuantityChange} />
            <Link onClick={makeOrder} href="/" className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-30">
                Make order
            </Link>
        </div>
        
        
        
        
    )
}