const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set the static folder
  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to database!');
})
.catch(error => {
  console.log('Connection failed!');
  console.log(error);
});

const recipesRouter = require('./routes/recipes');
app.use('/recipes', recipesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});