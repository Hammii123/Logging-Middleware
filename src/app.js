
import express from "express";
import loggerMiddleware from "./middleware/logger.middleware.js";
import { logError, logMessage } from "./utils/logger.js";
import testRoutes from "./routes/test.routes.js";

const app = express();

logMessage("Application started");

app.use(loggerMiddleware);
app.use(express.json());

app.use("/", testRoutes);

// Handle routes that do not exist
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
        path: req.originalUrl
    });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    logError(err, `${req.method} ${req.originalUrl}`);

    res.status(500).json({
        error: "Internal Server Error"
    });
});

export default app;
