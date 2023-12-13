import mongoose,{Schema} from "mongoose";



let Customer



const customerSchema = new Schema(
    {
        name: String,
        email: String,
        phone:String
    },{
        timestamps:true
    }
)


if (mongoose.models && mongoose.models.Customer) {
    Customer = mongoose.models.Customer;
  } else {
    Customer = mongoose.model('Customer', customerSchema);
  }
  


export default Customer;