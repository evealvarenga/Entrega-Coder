import express from 'express';
import productRouter from './routes/products.router.js';
import cartRouter from './routes/cart.routes.js';
import viewsRouter from './routes/views.routes.js';
import { engine } from 'express-handlebars';
import { __dirname } from './utils.js';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", engine());
app.set('view', __dirname+'/views');
app.set('view engine', "handlebars");

//Routes
app.use("api/products", productRouter); 
app.use("api/cart", cartRouter);
app.use("api/views", viewsRouter);

//SocketServer
const httpServer = app.listen(8080, () => {console.log(`Servidor escuchando en el puerto 8080`);});
const socketServer = new Server(httpServer);
socketServer.on('connection', socket => {
  console.log('socket', socket);
  console.log("Cliente conectado");
  socket.on('disconnect', ()=>{
    console.log("Cliente desconectado");
  })
})