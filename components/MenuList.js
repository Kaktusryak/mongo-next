
import MenuItem from "./MenuItem"


export default async function MenuList({menu,onChange}){
    
    
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    
    // console.log(menu)

    let menuList = menu.map((item)=>{
        return <MenuItem key={item._id} id={item._id} name={item.name} price={item.price} onChange={onChange} />
    })
    


    return(
        <ul>
            {menuList}
        </ul>
        
        
        
    )
}