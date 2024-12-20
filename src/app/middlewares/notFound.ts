import { RequestHandler } from "express";

const notFound: RequestHandler = (req, res, next) => { 
    res.status(404).send({
        success: false,
        message:"API not found !!",
        statusCode: 404,
        error: {},
        stack:''

    })
}
export default notFound;