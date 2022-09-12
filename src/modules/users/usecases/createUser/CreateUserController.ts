import { Response , Request } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{

    async handle(request : Request , response : Response):Promise<any>{

    try{

        const {name , password , email} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        const user = await createUserUseCase.execute(name  , password , email) 

        return  response.render("users/welcome" )

    }catch(err){
        
        return response.status(500).send(new Error("Server Error"))
    }

    }
}

export {CreateUserController}