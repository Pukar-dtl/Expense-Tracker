import logger from "../config/logger.js";
import response from "../utils/response.js";
export const errorHandler = (err, req, res, next) => {
    logger.error(err);
    return response(res, 500, err.message || "Internal server error");
};
export default errorHandler;
//# sourceMappingURL=errorhandlere.js.map