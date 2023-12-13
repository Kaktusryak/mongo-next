'use client'

import AddTopForm from "@/components/AddTopForm"
import MenuList from "@/components/MenuList"
import Menu from "@/components/Menu"

import { Context } from "react"



const getCustomers =async()=>{
    try {
        const res = await fetch('http://localhost:3000/api/customers',{
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
const getRestaurants =async()=>{
    try {
        const res = await fetch('http://localhost:3000/api/restaurants',{
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
const getMenu =async(id)=>{
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




export default async function AddOrder(){
    var array = []
    var customerId= ''
    var restaurantId = ''
    var menu = []
    const customers = await getCustomers()
    const restaurants = await getRestaurants()
    // console.log(restaurants)
    
    const onCustomer=(customer_id)=>{
        
        customerId = customer_id
        // console.log(customerId)
        const jsonCustomerId = JSON.stringify(customerId)
        localStorage.setItem("customerId",jsonCustomerId)
    }
    const onRestaurant=(restaurant_id)=>{
        
        restaurantId = restaurant_id
        const jsonRestaurantId = JSON.stringify(restaurantId)
        localStorage.setItem("restaurantId",jsonRestaurantId)
        
    }

    let customersIdList = customers.customers.map((item)=>{
        
        return    (<option value={item._id} key={item._id}></option> )
    })
    let restaurantsIdList = restaurants.restaurants.map((item)=>{
        
        return (<option value={item._id} key={item._id}></option> )
    })

    
    
    return(
        <div className="flex flex-col gap-3">
            
            <AddTopForm customersIdList={customersIdList} restaurantsIdList={restaurantsIdList} onCustomer={onCustomer} onRestaurant={onRestaurant} />
            
            
            
            
        </div>
    )
}