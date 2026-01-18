const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FOUNDER = "Keanu";
const DAUGHTER = "Kiana";

// AI Chat
app.post("/api/ai", (req, res) => {
  const msg = req.body.message;
  res.json({ reply: `Founder (${FOUNDER}), you said: "${msg}"` });
});

// Voice Command
app.post("/api/voice-command", (req, res) => {
  const voice = req.body.voice.toLowerCase();
  if (voice.includes("keanu")) {
    res.json({ reply: "Founder recognized. Command accepted." });
    // Add file control logic here
  } else if (voice.includes("kiana")) {
    res.json({ reply: "Acknowledged: Founder's Daughter has spoken." });
  } else {
    res.json({ reply: "Voice not authorized. Command rejected." });
  }
});

// Example file edit route
app.post("/api/files/edit", (req, res) => {
  const { filename, content, voice } = req.body;
  if (!voice.toLowerCase().includes("keanu")) {
    return res.json({ reply: "Unauthorized. Only Founder can edit files." });
  }
  fs.writeFileSync(filename, content);
  res.json({ reply: `File ${filename} updated by Founder.` });
});

app.listen(8080, () => console.log("Backend running on port 8080"));
