const socketClient = io();

socketClient.on("Welcome", (messege) =>{
    console.log(messege);
})