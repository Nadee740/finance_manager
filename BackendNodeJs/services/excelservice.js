const db = require("../config/db")
const xlsx = require("xlsx")
const fs = require("fs")

const uploadExcel = async (req, res) => {
    try {

        const { name, month, user_id } = req.body;
        const filePath = req.file.path;

        if (!user_id || !name || !month || !req.file) {
            console.log("body")
            return res.status(400).json({ error: 'All fields are required!' });
        }
        const userId = parseInt(user_id);
        console.log(userId)
        // **Step 1: Insert into months table**
        db.query('INSERT INTO finance_records (user_id, name, month) VALUES (?, ?, ?)', [userId, name, month], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error saving month: ' + err.message });
            }
            const month_id = result.insertId;

            // **Step 2: Read and Parse Excel File**
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

            if (sheetData.length === 0) {
                return res.status(400).json({ error: 'Excel file is empty!' });
            }

            // **Step 3: Insert Payments Data**
            const payments = sheetData.map(row => [month_id, row['payment type'], row['payment mode'], row['amount']]);
            const sql = 'INSERT INTO  expenses (month_id, payment_type, payment_mode, amount) VALUES ?';

            db.query(sql, [payments], (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Error inserting payments: ' + err.message });
                }
                res.json({ message: 'File uploaded and data saved successfully!' });

                // **Delete uploaded file after processing**
                fs.unlinkSync(filePath);
            });
        });

    } catch (error) {
        res.status(500).json({ error: 'Server Error: ' + error.message });
    }
}

module.exports = {
    uploadExcel
}