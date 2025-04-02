const db = require("../config/db")

const getMonthlyExpenses = async (req, res) => {
    let user_id = req.query.user_id;
    if (!user_id) {
        res.status(400).send({
            msg:"No User Id Found"
        })
    }
    user_id = parseInt(user_id);

    sql = "select * from finance_records where user_id = ? ORDER BY STR_TO_DATE(CONCAT('01-', month), '%d-%b-%Y') DESC;"
    db.query(sql, [user_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error getting payments: ' + err.message });
        }
    res.send({
        data: results,
        msg: "monthly expense list"
    })
    });
}

const getMonthlyExpenseAnalysis = async (req, res) => {
    try {
        const monthId = req.query.id;
        sql = "select * from expenses results where month_id = ?"
        db.query(sql, [monthId], async (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
            }
        const variableSQL = " select sum(amount) as sum from expenses results where month_id = ? and payment_type = 'variable' ";
        const utilitySQL = " select sum(amount) as sum from expenses results where month_id = ? and payment_type = 'utility' ";  
        const cashSQL = " select sum(amount) as sum from expenses results where month_id = ? and payment_mode = 'cash' ";  
        const bankSQL = " select sum(amount) as sum from expenses results where month_id = ? and payment_mode = 'bank account' ";  
        const monthNameSQL = " select * from finance_records where id = ?";  

        db.query(variableSQL, [monthId], async (err, variableResults) => {
            if (err) {
                return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
            }
            db.query(utilitySQL, [monthId], async (err, utlityResults) => {
                if (err) {
                    return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
                }
                db.query(cashSQL, [monthId], async (err, cashResults) => {
                    if (err) {
                        return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
                    }
                    db.query(bankSQL, [monthId], async (err, bankResults) => {
                        if (err) {
                            return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
                        }
                        db.query(monthNameSQL, [monthId], async (err, monthNameResults) => {
                            if (err) {
                                return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
                            }
                            const variableSum =  variableResults;
                            const utilitySum = utlityResults;
                            const bankSum = bankResults;
                            const cashSum = cashResults;
                            const responseData = {
                                variableSum,
                                utilitySum,
                                bankSum,
                                cashSum,
                                month:monthNameResults,
                                expenses: results
                            }
                            console.log(responseData)
                            res.status(200).send({
                                data: responseData
                            })
                        })
                    })
    
                })
            })
        })
        });

    } catch (err) {
        return res.status(500).json({ error: 'Error getting payments analysis: ' + err.message });
    }
}

module.exports = {
    getMonthlyExpenses,
    getMonthlyExpenseAnalysis
}