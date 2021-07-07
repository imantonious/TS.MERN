const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 8000;

require("./config/mongoose.config");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require("./routes/person.routes")(app);
require("./routes/product.routes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
