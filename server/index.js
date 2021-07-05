const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post.js');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin:"your client origin"
}))


const dbURI = 'YOUR_DB_URI';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server listing in port: ${PORT}`)))
  .catch(err => console.log(err));
mongoose.set('useFindAndModify', false);

// routes  
app.use('/posts', postRoutes);