// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://nishanth:nishanth2003@cluster0.fbotoww.mongodb.net/Libary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const libarySchema = new mongoose.Schema({
  Book_Name: String,
  Author: String,
  Quantity: String,
});

const libary = mongoose.model('libary', libarySchema);

app.get('/BOOK', (req, res) => {
  libary.find({}, (err, foundItems) => {
    if (!err) {
      res.send(foundItems);
    } else {
      console.log(err);
    }
  });
});

app.post('/insert', (req, res) => {
  const bookName = req.body.data.Book_Name;
  const Author = req.body.data.Author;
  const quantity = req.body.data.Quantity;
  const newItem = new libary({
    Book_Name: bookName,
    Author: Author,
    Quantity: quantity,
  });

  newItem.save((err) => {
    if (!err) {
      res.send('Successfully added a new item.');
      console.log("Successfully added a new item.")
    } else {
      console.log(err);
    }
  });
});

app.delete('/BOOK/:id', (req, res) => {
  const id = req.params.id;

  libary.findByIdAndRemove(id, (err) => {
    if (!err) {
      console.log('Successfully deleted item.');
    } else {
      console.log(err);
    }
  });
});

app.put("/BOOK/:id", (req, res) => {
  const { Book_Name, Author, Quantity} = req.body.data;
  const id = req.params.id;

  libary.findByIdAndUpdate(
    id,
    { Book_Name, Author, Quantity},
    { new: true },
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('BOOK data update successfully!');
        res.status(200).send("BOOK data update successfully!");
      }
    }
  );
});

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});