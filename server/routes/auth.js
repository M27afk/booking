import { Router } from "express";
import { createUser } from "../controller/auth.js";
const Route = Router()

Route.route("/").post(createUser)

export default Route