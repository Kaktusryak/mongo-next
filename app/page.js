import OrdersList from '@/components/OrdersList'
import Image from 'next/image'

const getOrders = async()=>{
  try {
      const res = await fetch('http://localhost:3000/api/orders',{
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





export default async function Home() {
  
  const data = await getOrders();
  // console.log(data)
  return <OrdersList data={data}/>
}
