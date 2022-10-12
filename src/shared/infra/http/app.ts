import "reflect-metadata"
import express  from 'express'
import cors from "cors"
import {router} from "./routes"

import nunjucks from "nunjucks"
import  methodOverride from "method-override";
const swaggerConf = require("swagger-ui-express");
import swaggerFile from "../../../../swagger.json"

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
const app = express();

app.use(express.json());
app.use("/api-docs",swaggerConf.serve,swaggerConf.setup(swaggerFile));
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(router)
app.use(methodOverride("_method"))
app.use(express.urlencoded({    
  extended: true}));  
app.use( express.json())  
app.use(express.static("src/public"));


app.set("view engine" ,"njk" ,);
nunjucks.configure("src/views",{
 express:app,
 autoescape:false,
  noCache:true
})

export {app}