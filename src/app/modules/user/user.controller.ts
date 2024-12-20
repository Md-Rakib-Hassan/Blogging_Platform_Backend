import { UserService } from "./user.service"

const createUser = async (req,res) => {
    try {
        const result = await UserService.createUserIntoDB(req.body);

        res.send({
            success: true,
            message: 'User registered successfully',
            statusCode: 201,
            data: result
        })
    } catch (err:any) { 
        res.send({
            success: false,
            message: err.message,
            statusCode: 400,
            error: err,
            stack: err.stack
        })
    }
}

export const UserController = {
    createUser
}