import EditOrderForm from "@/components/EditOrderForm";
import Menu from "@/components/Menu";

export default function EditOrder({params}){
    const {id}= params
    return(
        <EditOrderForm id={id}/>
    )
}