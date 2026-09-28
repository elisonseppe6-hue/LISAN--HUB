import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const services = [
  { id: 1, name: "Kutengeneza CV", description: "Tengeneza CV ya kitaalamu.", tokens: 5, category: "Kazi" },
  { id: 2, name: "Barua rasmi", description: "Andaa barua rasmi kulingana na mahitaji yako.", tokens: 3, category: "Nyaraka" },
  { id: 3, name: "Tangazo la biashara", description: "Tengeneza tangazo la kuvutia la biashara yako.", tokens: 3, category: "Biashara" },
  { id: 4, name: "Social Media Caption", description: "Pata caption ya Facebook, Instagram au TikTok.", tokens: 2, category: "Mitandao" },
  { id: 5, name: "Tafsiri", description: "Tafsiri Kiswahili na English.", tokens: 2, category: "Lugha" }
];

app.get("/api/health", (req, res) => {
  res.json({ ok: true, app: "LISAN HUB", version: "MVP 1.0" });
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
