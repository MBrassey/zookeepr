const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// Make css / js / image files available
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
