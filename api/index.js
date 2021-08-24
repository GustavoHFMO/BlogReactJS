// lib to connect with a server
const express = require("express");
const app = express();

// to allow the connection with API
const cors = require('cors')
app.use(cors())

// lib to import environment variables
const dotenv = require("dotenv");

// lib to connect with the database
const mongoose = require("mongoose");

// lib to upload images
const multer = require("multer");
const path = require("path");

// importing the requisition in this url
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

// activating the environment variables
dotenv.config();

// waiting for json files
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))


// connecting with the database in the cloud
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


// setting the path to store the images
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    },
});

// to upload images
const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!");
})


// using this route
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


// listening the port 5000 in my computer
app.listen("5000", () => {
    console.log("Backend is running!");
});
