require("dotenv").config();
const express = require("express");
const cors = require("cors");
const deezerController = require("./modules/deezer/controllers/deezer.controller");

const app = express();

app.use(cors())

app.get("/search", deezerController.search);
app.get("/artist", deezerController.getArtist);
app.get("/artist/top", deezerController.getTracks);
app.get("/artist/albums", deezerController.getAlbums);

app.listen(process.env.PORT, () => console.log("Connected"));
