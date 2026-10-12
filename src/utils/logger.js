
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDirectory = path.resolve(__dirname, "../../logs");
const logFile = path.join(logsDirectory, "app.log");

fs.mkdirSync(logsDirectory, { recursive: true });

const logStream = fs.createWriteStream(logFile, {
    flags: "a"
});

logStream.on("error", (error) => {
    console.error("Logger file write error:", error);
});

export function logMessage(message) {
    const timestamp = new Date().toISOString();

    logStream.write(`[${timestamp}] ${message}\n`);
}

export function logError(error, context = "Application error") {
    const stack = error instanceof Error
        ? error.stack
        : String(error);

    logMessage(`${context}\n${stack}`);
}
