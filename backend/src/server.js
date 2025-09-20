import express from "express"
import { ENV } from "./config/env"
import { connectDB } from "./config/db"

const app = express()

connectDB()

app.get("/", (req, res) => res.send("hello for the server!"))

app.listen(ENV.PORT, () => console.log("Server is up and running"))