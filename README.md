# Logging & Monitoring API

## Description
A Node.js and Express.js API that logs HTTP requests, response status codes, response times, and application errors.

## Features
- Logs HTTP request methods and URL paths.
- Measures response time in milliseconds.
- Records HTTP status codes.
- Logs error messages and stack traces.
- Saves logs in `logs/app.log`.
- Uses a separate logger utility and middleware.

## Technologies
- Node.js
- Express.js
- JavaScript
- Git

## Installation

```bash
npm install
npm run dev
```

The server runs at `http://localhost:3000`.

## Test Routes

| Method | Endpoint | Expected Status |
|---|---|---|
| GET | `/` | 200 |
| GET | `/api/test` | 200 |
| POST | `/api/test` | 201 |
| GET | `/api/error` | 500 |
| GET | `/api/unknown` | 404 |

## Log File
Logs are stored in `logs/app.log`.
