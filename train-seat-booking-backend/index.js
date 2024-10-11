require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'Vva9cem4cc***', // Your MySQL password
    database: 'train_seat_booking',
    port: 3306 // Default MySQL port
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Train Seat Booking Backend!');
});

// Get seats
app.get('/api/seats', (req, res) => {
    db.query('SELECT * FROM seats', (err, results) => {
        if (err) {
            console.error('Error fetching seats:', err);
            return res.status(500).json({ error: err });
        }
        res.json({ seats: results });
    });
});

// Book seats
app.post('/api/book', (req, res) => {
    const numberOfSeats = req.body.numberOfSeats;
    console.log('Request payload:', req.body);

    if (numberOfSeats < 1 || numberOfSeats > 7) {
        console.log('Invalid number of seats:', numberOfSeats);
        return res.status(400).json({ message: 'You can book between 1 and 7 seats at a time.' });
    }

    db.query('SELECT * FROM seats WHERE booked = FALSE', (err, results) => {
        if (err) {
            console.error('Error querying seats:', err);
            return res.status(500).json({ error: err });
        }

        console.log('Available seats:', results);

        if (results.length < numberOfSeats) {
            console.log('Not enough seats available');
            return res.status(400).json({ message: 'Not enough seats available' });
        }

        // Try to find seats in the same row
        let bookedSeats = [];
        for (let i = 0; i < results.length; i++) {
            let rowSeats = [];
            for (let j = 0; j < numberOfSeats; j++) {
                if (results[i + j] && Math.floor(results[i + j].number / 7) === Math.floor(results[i].number / 7)) {
                    rowSeats.push(results[i + j]);
                } else {
                    break;
                }
            }
            if (rowSeats.length === numberOfSeats) {
                bookedSeats = rowSeats;
                break;
            }
        }

        // If not enough seats in one row, book nearby seats
        if (bookedSeats.length < numberOfSeats) {
            bookedSeats = results.slice(0, numberOfSeats);
        }

        const seatIds = bookedSeats.map(seat => seat.id);
        console.log('Booking seats:', seatIds);

        db.query('UPDATE seats SET booked = TRUE WHERE id IN (?)', [seatIds], (err) => {
            if (err) {
                console.error('Error updating seats:', err);
                return res.status(500).json({ error: err });
            }
            res.json({ bookedSeats: bookedSeats.map(seat => seat.number) });
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});