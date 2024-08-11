const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
});

// Route to handle subtraction
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
});

// Route to handle multiplication
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
});

// Route to handle division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }
    const result = num1 / num2;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator API running at http://localhost:${port}`);
});
