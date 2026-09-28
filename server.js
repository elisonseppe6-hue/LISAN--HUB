import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Huduma za LISAN HUB
const services = [
  {
    id: 1,
    name: "Kutengeneza CV",
    description: "Tengeneza CV ya kitaalamu",
    price: 5
  },
  {
    id: 2,
    name: "Barua Rasmi",
    description: "Andaa barua rasmi mbalimbali",
    price: 3
  },
  {
    id: 3,
    name: "Tangazo la Biashara",
    description: "Tengeneza tangazo la biashara",
    price: 3
  },
  {
    id: 4,
    name: "Caption za Mitandao",
    description: "Tengeneza captions za kuvutia",
    price: 2
  },
  {
    id: 5,
    name: "Tafsiri",
    description: "Tafsiri maandishi kutoka lugha moja kwenda nyingine",
    price: 2
  }
];

// API ya kuangalia kama server inafanya kazi
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "LISAN HUB API inafanya kazi"
  });
});

// API ya huduma
app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    services
  });
});

// Serve website
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
