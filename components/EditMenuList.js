
import EditMenuItem from "./EditMenuItem"


export default async function EditMenuList({menu,onChange}){
    
    
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    
    // console.log(menu)

    let menuList = menu.map((item)=>{
        return <EditMenuItem key={item._id} id={item.menu_item_id} quantity={item.quantity} onChange={onChange} />
    })
    


    return(
        <ul>
            {menuList}
        </ul>
        
        
        
    )
}