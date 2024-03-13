const express = require('express');
const custom_routes = require('./routes/route');
const connectDB = require('./db/connect');


const app = express();
const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://singhamansingh999:BackendAPI123@cluster0.qvdzmgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Middleware
app.use("/api", custom_routes);


const start = async () => {
    try{
        await connectDB(uri);
        app.listen(PORT, () => {
            console.log('Server Connected!!')
        })
    }catch(e){
        console.log('Error Occurred!!')
        console.log(e);
    }
}

start();
