const express = require("express");
const multer = require("multer");
const path = require("path");
const Ad = require("../models/ads");

const router = express.Router();

// Configure Multer for storage
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage });

// Handle Ad Submission WITH Image Upload
router.post("/upload", upload.single("image"), async (req, res) => {
    console.log("Received image file:", req.file); // Debugging log

    try {
        const { title, websiteLink, position, placementPlan, duration } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Store the file path as URL

        const newAd = new Ad({
            title,
            websiteLink,
            position,
            placementPlan,
            duration: parseInt(duration),
            imageUrl
        });

        await newAd.save();
        res.status(201).json({ message: "Ad successfully uploaded!", ad: newAd });
    } catch (error) {
        res.status(500).json({ error: "Error saving ad", details: error.message });
    }
});

module.exports = router;