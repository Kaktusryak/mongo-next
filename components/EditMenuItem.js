export default function EditMenuItem({id,quantity,onChange}){
    //check synt
    
    return(
        
        <li  className="flex justify-between border border-slate-500 px-8 py-2">
            <p>Id: {id}</p><p>Previous quantity: {quantity}</p><label>Amount</label><input type="number" className="w-20 border border-slate-900 mx-3" placeholder="0" onChange={(e)=>onChange(id,e.target.value)}/>
        </li>
        
        
        
    )
}