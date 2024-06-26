const app = require('./app.js');

// PORT
const PORT = process.env.PORT || 5780;

// LISTEN 
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})