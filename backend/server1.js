// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://nishanth:nishanth2003@cluster0.fbotoww.mongodb.net/Ebook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EbookSchema = new mongoose.Schema({
  Book_Name: String,
  Author: String,
  Link: String,
});

const Ebook = mongoose.model('Ebook', EbookSchema);

app.get('/eBOOK', (req, res) => {
  Ebook.find({}, (err, foundItems) => {
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
  const Link = req.body.data.Link;
  const newItem = new Ebook({
    Book_Name: bookName,
    Author: Author,
    Link: Link,
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

app.delete('/eBOOK/:id', (req, res) => {
  const id = req.params.id;

  Ebook.findByIdAndRemove(id, (err) => {
    if (!err) {
      console.log('Successfully deleted item.');
    } else {
      console.log(err);
    }
  });
});

app.put("/eBOOK/:id", (req, res) => {
  const { Book_Name, Author, Link} = req.body.data;
  const id = req.params.id;

  Ebook.findByIdAndUpdate(
    id,
    { Book_Name, Author, Link},
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

const port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});