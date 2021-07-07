const express = require('express');
var cors = require('cors');
const app = express();
const PORT = 8000;

// middleware
app.use(cors());

// routes
require('./routes/person.routes')(app);
    
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
