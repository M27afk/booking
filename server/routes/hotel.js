import { Router } from "express";
import { createHotel,updateHotel ,deleteHotel,getAllHotels,getHotel} from "../controller/hotel.js";
import { authAdmin } from "../utils/tokenVerify.js";
const Route = Router()

//All
Route.route("/").post(authAdmin, createHotel).get(getAllHotels)

//By ID
Route.route("/:id").patch(authAdmin, updateHotel).delete(authAdmin, deleteHotel).get(getHotel)


export default Route