import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000

const app = express()



app.use(express.static(path.join(__dirname, "portfolio")));

app.get("/rohanbiradar",(req,res) => {
    res.status(200)
    // res.send("Eeeuu")
    // res.sendFile(path.join(__dirname,"portfolio","index.html"))
    res.sendFile(path.join(__dirname, "portfolio", "index.html"));
})

app.listen(PORT,()=> {
    console.log("App is running on port",PORT)
})