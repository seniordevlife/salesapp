const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
