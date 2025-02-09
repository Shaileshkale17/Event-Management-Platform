import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import ConnectionDb from "./DataBase/index.js";
import routersemployee from "./router/Employee.routes.js";
import eventsrouter from "./router/Event.routes.js";
import Messagerouter from "./router/Message.routes.js";
import Userrouter from "./router/User.routes.js";
import inforouter from "./router/UserInfo.routes.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
  },
});
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.locals.io = io;
app.use(cors());
app.use(express.json());
app.use("/api/v1/", routersemployee);
app.use("/api/v1/", eventsrouter);
app.use("/api/v1/", Messagerouter);
app.use("/api/v1/", Userrouter);
app.use("/api/v1/", inforouter);

// DataBase Connection

ConnectionDb();

io.on("connection", (socket) => {
  console.log("new connection :", socket.id);
});

server.listen(8080, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
