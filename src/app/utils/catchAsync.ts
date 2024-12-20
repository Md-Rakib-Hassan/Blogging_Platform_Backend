import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (fn: RequestHandler,errorCode:number|undefined=undefined) => {
  return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch((err) => {
          err.statusCode=errorCode||undefined;
          return next(err)
      });
  };
};
export default catchAsync;
