import sequelize from "./src/config/db.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./src/router/userrouter.js";
import { dirname } from "./src/Middleware/upload.js";
import path from "path"
import Productdata from "./src/router/productitems.js"
import reviewdata from "./src/router/review.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use("/upload",express.static(path.join(dirname, "../../uploads/images/")));

async function connection() {
  try {
    await sequelize.authenticate();
    console.log("authenticate");
    await sequelize.sync({ alter: true });
    console.log("sync");
  } catch (error) {
    console.error(error);
  }
}
connection();

app.use(
  "/api",
  router,Productdata,reviewdata
  
);

app.listen(PORT, () => {
  console.log("port  is :", PORT);
});
