import mongoose,{Schema} from "mongoose";

let Restaurant
const menuItemSchema = new Schema(
    { 
        name:String,
        description:String,
        price:Number
    }
)


const restaurantSchema = new Schema(
    {
        name: String,
        address: String,
        cuisine: String,
        menu:[menuItemSchema]

    },{
        timestamps:true
    }
)


if (mongoose.models && mongoose.models.Restaurant) {
    Restaurant = mongoose.models.Restaurant;
  } else {
    Restaurant = mongoose.model('Restaurant', restaurantSchema);
  }
  

export default Restaurant;