const express = require("express");
const path = require("path");
const router = express.Router();

// GET /api/resume/download
router.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "..", "uploads", "kalyan_resume .pdf");
  res.download(filePath, "Kalyan-Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("File not found");
    }
  });
});

module.exports = router;
