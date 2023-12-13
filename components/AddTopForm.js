import { useState } from "react"
import Link from "next/link"




export default function AddTopForm({customersIdList,restaurantsIdList,onCustomer, onRestaurant,onMenu}){
    //check synt
    const [rest,setRest] = useState('')
    const onCustomerChange = (e)=>{
        //e.preventDefault()
        console.log(e.target.value)
        onCustomer(e.target.value)
    }
    const onRestaurantChange = (e)=>{
        //e.preventDefault()
        console.log(e.target.value)
        onRestaurant(e.target.value)
        setRest(e.target.value)
    }
    const onDateChange=(e)=>{
        console.log(e.target.value)
        const jsonDate= JSON.stringify(e.target.value)
        localStorage.setItem("date",jsonDate)
    }
    const saveInfo =()=>{
        //localstorage
        // alert('hello')

    }


    return(
        
        <form className="flex flex-col gap-3">
                <input type="text"list="customersIdList" placeholder="Customer Id" className="border border-slate-500 px-8 py-2" onChange={onCustomerChange}/>
                <datalist id='customersIdList'>
                    {customersIdList}
                </datalist>
                <input type="text" list="restaurantsIdList"placeholder="Restaurant Id" className="border border-slate-500 px-8 py-2"onChange={onRestaurantChange}/>
                <datalist id='restaurantsIdList'>
                    {restaurantsIdList}
                </datalist>
                <input type="date" placeholder="Order Date" className="border border-slate-500 px-8 py-2" onChange={onDateChange}/>
                <Link onClick={saveInfo} href="/addOrderItems" className="bg-blue-600 font-bold text-white py-3 px-6 w-fit">
                    Next
                </Link>
                
            </form>
        
        
        
    )
}







