import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });

let schools = [];

app.post("/api/schools", upload.single("image"), (req, res) => {
  try {
    const { name, address, city, state, contact, email_id } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newSchool = {
      id: schools.length + 1,
      name,
      address,
      city,
      state,
      contact,
      email_id,
      imageUrl,
    };

    schools.push(newSchool);

    res.status(201).json({ success: true, school: newSchool });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add school" });
  }
});

app.get("/api/schools", (req, res) => {
  res.json(schools);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
