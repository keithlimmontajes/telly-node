const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 1001;

/** ROUTES */
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

/** IMPORT ROUTES */
app.use("/api/v1", authRoutes);
app.use("/api/v1", dashboardRoutes);
app.use("/api/v1", userRoutes);

/** Fallback ERROR */
app.use("/{*splat}", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
