# Serenity Yoga Studio

A beginner-friendly Yoga Studio website built with Node.js, Express.js, HTML5, CSS3, and JavaScript.

## Run the project

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Routes

- `GET /` - Yoga Studio homepage
- `GET /classes` - Full class listing
- `GET /api/classes` - Available classes as JSON
- `GET /api/bookings` - All in-memory bookings as JSON
- `POST /api/bookings` - Creates a booking from `studentName`, `email`, and `className`

Bookings are stored in memory and will be cleared when the server restarts.
