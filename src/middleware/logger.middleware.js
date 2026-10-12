
import { logMessage, logError } from "../utils/logger.js";

function loggerMiddleware(req, res, next) {
    const startTime = process.hrtime.bigint();


    res.on("finish", () => {
        const endTime = process.hrtime.bigint();

        const duration = Number(endTime - startTime) / 1_000_000;

        logMessage(
            `${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration.toFixed(2)}ms`
        );
    });

    res.on("close", () => {
        if (!res.writableFinished) {
            logMessage(
                `${req.method} ${req.originalUrl} - CONNECTION CLOSED`
            );
        }
    });

    next();
}

export default loggerMiddleware;
