const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");


const app = express();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);

mongoose
  .connect("mongodb+srv://elayebwissem24:FBTvjSpm54AOG6t8@cluster0.hqrh4oz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);


app.listen(5000, () => {
  console.log("server started on port 5000");
});