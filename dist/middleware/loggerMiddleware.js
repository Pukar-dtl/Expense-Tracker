import logger from "../config/logger.js";
const loggerMidleware = (req, res, next) => {
    logger.info({
        body: req.body || null,
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl
    });
    next();
};
export default loggerMidleware;
//# sourceMappingURL=loggerMiddleware.js.map