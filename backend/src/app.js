const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const hrRoutes = require("./routes/hr");
const adminRoutes = require("./routes/admin");
const documentRoutes = require("./routes/documents");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app;