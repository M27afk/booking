import { Router } from "express";
import { createHotel,updateHotel ,deleteHotel,getAllHotels,getHotel,getCount, getType, getHotels} from "../controller/hotel.js";
import { authAdmin } from "../utils/tokenVerify.js";
const Route = Router()

//All
Route.route("/").post(authAdmin, createHotel).get(getAllHotels)
Route.route("/fetch").get(getHotels)
//By ID
Route.route("/:id").patch(authAdmin, updateHotel).delete(authAdmin, deleteHotel).get(getHotel)

Route.route("/count/cities").get(getCount)
Route.route("/count/type").get(getType)
export default Route