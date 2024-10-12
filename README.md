# Train Seat Booking

[![Vercel](https://img.shields.io/badge/frontend-Vercel-brightgreen)](https://wmsparktrack.vercel.app/)
[![Render](https://img.shields.io/badge/backend-Render-blue)](https://train-seat-booking-mmqj.onrender.com)

Train Seat Booking is a web application that allows users to book seats on a train. This project is built using Angular for the frontend and Node.js/Express with MySQL for the backend. The frontend is deployed on Vercel, and the backend is deployed on Render with the MySQL database hosted on Cloud Clever.

## Table of Contents

- [Problem Description](#problem-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Problem Description

1. There are 80 seats in a coach of a train with only 7 seats in a row and the last row having only 3 seats. For simplicity, there is only one coach in this train.
2. One person can reserve up to 7 seats at a time.
3. If a person is reserving seats, the priority will be to book them in one row.
4. If seats are not available in one row, the booking should be done in such a way that the nearby seats are booked.
5. Users can book as many tickets as they want until the coach is full.
6. There is no login functionality for this application.

### Functionality

1. The input required will only be the number of seats needed. Example: 2, 4, 6, 1, etc.
2. The output should be the seat numbers that have been booked for the user, along with the display of all the seats and their availability status through color or number or any other suitable method.

## Features

- User-friendly interface for booking train seats
- Real-time seat availability
- Responsive design for mobile and desktop

## Installation

To get a local copy up and running, follow these steps:

### Frontend

1. **Clone the repository**:

   ```bash
   git clone https://github.com/XENO2410/Train-Seat-Booking.git
   cd Train-Seat-Booking
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

### Backend

1. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the MySQL database**:
   - Ensure your MySQL database is running and accessible.
   - Update the database configuration in `backend/config/db.config.js`.

4. **Run the backend server**:

   ```bash
   node server.js
   ```

   The backend server will be available at `http://localhost:3000`.

## Usage

1. **Open the application** in your web browser.
2. **Select the number of seats** you want to book.
3. **View the available seats** and confirm your booking.
4. **Receive a confirmation** with the seat numbers that have been booked for you.

## Deployment

### Frontend

This project is deployed on Vercel. Follow these steps to deploy your own version:

1. **Sign Up or Log In to Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign up or log in.

2. **Import Your GitHub Repository**:
   - Click on "New Project".
   - Select "Import Git Repository".
   - Connect your GitHub account if you haven't already.
   - Select the repository containing your frontend code.

3. **Configure the Project**:
   - **Project Name**: Give your project a name.
   - **Root Directory**: Specify the root directory as `dist/train-seat-booking`.
   - **Framework Preset**: Select the appropriate framework preset (e.g., Angular).

4. **Deploy**:
   - Click the "Deploy" button to deploy your frontend.
   - Vercel will build and deploy your frontend. Once the deployment is complete, Vercel will provide a URL where your frontend is hosted.

### Backend

This project is deployed on Render. Follow these steps to deploy your own version:

1. **Sign Up or Log In to Render**:
   - Go to [Render](https://render.com/) and sign up or log in.

2. **Create a New Web Service**:
   - Click on "New" and select "Web Service".
   - Connect your GitHub account if you haven't already.
   - Select the repository containing your backend code.

3. **Configure the Service**:
   - **Name**: Give your service a name.
   - **Environment**: Select the environment (e.g., Node).
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

4. **Deploy**:
   - Click the "Create Web Service" button to deploy your backend.
   - Render will build and deploy your backend. Once the deployment is complete, Render will provide a URL where your backend is hosted.

### Database

The MySQL database is hosted on Cloud Clever. Ensure your database credentials are correctly configured in the backend.
