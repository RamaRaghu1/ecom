const app=require("./app");
const connectDatabase = require("./db/Database");

// handling uncaught exception(error)
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down the server for handling uncaught exception`);
})

// config
if(process.env.NODE_ENV !=="PRODUCTION"){
    require("dotenv").config({
        path:"config/.env"
    })
}

// connect DB
connectDatabase();

// create server
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})

// unhandled promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Shutting down the seerver for ${err.message}`)
    console.log(`Shutting down the server for unhandled promise rejection`)

server.close(()=>{
    process.exit(1)
})
})
