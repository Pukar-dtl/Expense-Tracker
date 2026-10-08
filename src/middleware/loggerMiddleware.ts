import logger from "../config/logger.js"
import type { Request, Response, NextFunction } from "express";

const loggerMidleware = (req : Request, res : Response, next : NextFunction) =>{
    logger.info({
        body : req.body || null,
        timestamp : new Date(),
        method : req.method,
        url : req.originalUrl
    })
    next();
}