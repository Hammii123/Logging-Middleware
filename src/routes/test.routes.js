
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Logging & Monitoring API is running!");
});

router.get("/api/test", (req, res) => {
    res.status(200).json({
        message: "Test route is working"
    });
});

router.get("/api/error", (req, res, next) => {
    next(new Error("This is a test error"));
});

router.post("/api/test", (req,res)=>{
    res.status(201).json({
        message: "Post request successful",
        data:req.body
    })
})

export default router;
