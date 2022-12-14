const express = require("express");
const router = express.Router();
const userRouter = require("./router/userRouter");
const boardRouter = require("./router/boardRouter");

router.use("/user", userRouter);
router.use("/board", boardRouter);

module.exports = router;
