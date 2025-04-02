const express = require('express');
const router = express.Router();
const expenseService = require("../services/expenseservice")

router.get("/get-list", expenseService.getMonthlyExpenses);

router.get("/analysis", expenseService.getMonthlyExpenseAnalysis);

module.exports = router;
