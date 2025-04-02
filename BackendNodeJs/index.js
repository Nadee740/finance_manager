const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const userController = require("./controllers/usercontroller");
const excelController = require("./controllers/excelcontroller");
const expenseController = require("./controllers/expensecontroller");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("App is live")
})
app.use('/api/user', userController);

app.use("/api/excel", excelController);

app.use("/api/expense", expenseController);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
