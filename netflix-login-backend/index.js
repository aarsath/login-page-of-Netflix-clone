const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Netflix backend is running!");
});


app.post("/api/login", (req, res) => {

    console.log("LOGIN REQUEST RECEIVED");
    console.log(req.body);

    const { email, password } = req.body;

    if (email === "user@gmail.com" && password === "0011") {

        res.status(200).send({
            success: true,
            message: "Login successful"
        });

    } else {

        res.status(401).send({
            success: false,
            message: "Invalid email or password"
        });

    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
