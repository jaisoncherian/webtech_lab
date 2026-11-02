const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const classes = [
  {
    id: 1,
    name: "Hatha Yoga",
    description: "A gentle practice focused on alignment, breathing, and steady poses.",
    duration: "60 minutes",
    level: "Beginner"
  },
  {
    id: 2,
    name: "Vinyasa Yoga",
    description: "Flow smoothly from one pose to the next while connecting movement with breath.",
    duration: "60 minutes",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Ashtanga Yoga",
    description: "Build strength and focus with a traditional, energetic sequence of postures.",
    duration: "75 minutes",
    level: "Advanced"
  },
  {
    id: 4,
    name: "Meditation",
    description: "Slow down, settle the mind, and learn practical techniques for inner calm.",
    duration: "30 minutes",
    level: "All levels"
  },
  {
    id: 5,
    name: "Power Yoga",
    description: "A dynamic workout that develops stamina, flexibility, and confidence.",
    duration: "60 minutes",
    level: "Intermediate"
  }
];

const bookings = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/classes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "classes.html"));
});

app.get("/api/classes", (req, res) => {
  res.status(200).json(classes);
});

app.get("/api/bookings", (req, res) => {
  res.status(200).json(bookings);
});

app.post("/api/bookings", (req, res) => {
  const { studentName, email, className } = req.body;

  if (
    typeof studentName !== "string" ||
    !studentName.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof className !== "string" ||
    !className.trim()
  ) {
    return res.status(400).json({
      error: "Student name, email, and yoga class are required."
    });
  }

  const selectedClass = classes.find(
    (yogaClass) => yogaClass.name.toLowerCase() === className.trim().toLowerCase()
  );

  if (!selectedClass) {
    return res.status(400).json({
      error: "Please choose a valid yoga class."
    });
  }

  const booking = {
    id: bookings.length + 1,
    studentName: studentName.trim(),
    email: email.trim(),
    className: selectedClass.name,
    bookedAt: new Date().toISOString()
  };

  bookings.push(booking);
  return res.status(201).json({
    message: "Your yoga session has been booked successfully.",
    booking
  });
});

app.use((req, res) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "API endpoint not found." });
  }

  return res.status(404).send("<h1>404 - Page not found</h1><p><a href='/'>Return to the homepage</a></p>");
});

app.listen(PORT, () => {
  console.log(`Yoga Studio is running at http://localhost:${PORT}`);
});
