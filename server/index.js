const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT1 || process.env.PORT2;
const app = express();
const xeberRouter = require("./router/xeberRouter");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({"name":"xezer"});
});

app.use("/api/xeber", xeberRouter);

app.listen(PORT, () => {
    console.log(`Ha bu server bu: ${PORT} da cagrildi`);
});
