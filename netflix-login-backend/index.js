const express = require("express");
const cors = require("cors");

const app = express();
const email = process.env.LOGIN_EMAIL;
const password = process.env.LOGIN_PASSWORD;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/health", function (_req, res) {
    res.status(200).json({ status: "ok" });
});

app.post("/login", function (req, res) {
    if (!email || !password) {
        return res.status(503).json({ success: false, message: "Login service is not configured." });
    }

    const isValidLogin = req.body?.Email === email && req.body?.Password === password;

    if (isValidLogin) {
        return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: "Wrong email or password." });
});

app.listen(port, function () {
    console.log(`Server running on port ${port}.`);
});
