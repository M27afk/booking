import { Router } from "express";
import { createRoom, deleteroom, getAllrooms, getroom, updateroom } from "../controller/room.js";
import { authAdmin } from "../utils/tokenVerify.js";
const Route = Router()

//All
Route.route("/").get(getAllrooms)

//By ID
Route.route("/:hotelid").post(authAdmin, createRoom)

Route.route("/:hotelid/:id").delete(authAdmin, deleteroom)
Route.route("/:id").patch(authAdmin, updateroom).get(getroom)


export default Route