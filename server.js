import express from "express";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import router from "./src/routers/index.router.js";
import morgan from "morgan";
import cors from "cors";
import { engine } from "express-handlebars";
import __dirname from './utils.js'
import {createServer} from 'http'
import Handlebars from 'handlebars';



try {

  

const server = express();
const port = 8000;
const ready = () =>{console.log ("Server ready on port " + port)};
const httpServer = createServer(server);
httpServer.listen(port, ready);

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use("/public",express.static(__dirname + '/public'));


server.engine('handlebars', engine())
server.set('view engine', 'handlebars')
server.set('views', __dirname+'/src/views')
Handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});


server.use(router);
server.use(errorHandler)
server.use(pathHandler); 


} catch (error) {
    console.log(error);
}

