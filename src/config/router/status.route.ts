import {Request, Response, Router} from "express";
import httpStatus from "http-status";

export function register(router: Router){
    router.get('/status', (req: Request, res: Response) => res.status(httpStatus.OK).send())
}