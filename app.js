const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


// Load View Engine
app.set('views', path.join(__dirname, 'views/pages/'));
app.set('view engine', 'ejs');
// Home Route
app.get('/', (req, res) => res.render ('index'));
// Start Server
app.listen(port, () => console.log(`App listening on port ${port}`));