const bcrypt = require('bcryptjs');
const db = require("../config/db")

const userSignUp = async (req, res) => {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user to database
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(sql, [email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        console.log(result.insertId)
        res.json({ message: 'User registered', id: result.insertId });
    });
}

const userSignIn = async (req, res) => {
    const { email, password } = req.body;

    // Get user from database
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        const user = results[0];

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        res.json({ message: 'Login successful', id: user.id });
    });
}

module.exports = {
    userSignUp,
    userSignIn
}