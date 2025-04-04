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

const getUser = async (req, res) => {
    const id = parseInt(req.query.id);

    // Get user from database
    const sql = 'SELECT * FROM users WHERE id = ?';
    console.log(req.query.id)
    db.query(sql, [id], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        const user = results[0];

        res.json({ message: 'Login successful', data: user });
    });
}

const updateUser = async (req, res) => {
    let id = req.query.id;
    id = parseInt(id)
    console.log(req.body);
    console.log(req.query);
    const {email, occupation, salary, place, name} = req.body;
    console.log(email, occupation, salary, place, name, id);
    const sql = 'UPDATE users SET email = ?, occupation = ?, salary = ?, place = ?, name = ? WHERE id = ?';
    db.query(sql, [email, occupation, salary, place, name, id], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            console.log("aa")
            return res.status(400).json({ error: 'User not found' });
        }

        const user = results[0];

        res.json({ message: 'Login successful', data: user });
    });
}

module.exports = {
    userSignUp,
    userSignIn,
    getUser,
    updateUser
}