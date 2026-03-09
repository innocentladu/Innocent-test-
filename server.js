const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const events = [];

// Get all fitness events
app.get('/api/events', (req, res) => {
    res.json(events);
});

// Create a new fitness event
app.post('/api/events', (req, res) => {
    const event = {
        id: events.length + 1,
        name: req.body.name,
        date: req.body.date
    };
    events.push(event);
    res.status(201).json(event);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
