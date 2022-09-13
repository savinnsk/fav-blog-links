import { Request, Response, Router } from "express";

const viewRoutes = Router()


viewRoutes.get("/" , (request : Request ,  response : Response ) =>{
    response.render("index")
})

viewRoutes.get("/users/create" , (request : Request ,  response : Response ) =>{
    response.render("users/create")
})

viewRoutes.get("/users/welcome" , (request : Request ,  response : Response ) =>{
    response.render("users/welcome")
})

export {viewRoutes}