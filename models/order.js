import mongoose,{Schema} from "mongoose";

let Order
const itemsSchema = new Schema(
    {
        menu_item_id:String,
        quantity:String
    }
)


const orderSchema = new Schema(
    {
        customer_id: String,
        restaurant_id: String,
        order_date:{type:Date, default:Date.now},
        items:[itemsSchema]

    },{
        timestamps:true
    }
)


if (mongoose.models && mongoose.models.Order) {
    Order = mongoose.models.Order;
  } else {
    Order = mongoose.model('Order', orderSchema);
  }
  


//Order = mongoose.model.Order || mongoose.model("Order", orderSchema);
export default Order;