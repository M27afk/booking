import { Router } from "express";
import { createHotel,updateHotel ,deleteHotel,getAllHotels,getHotel} from "../controller/hotel.js";
const Route = Router()

//All
Route.route("/").post(createHotel).get(getAllHotels)

//By ID
Route.route("/:id").patch(updateHotel).delete(deleteHotel).get(getHotel)


export default Route