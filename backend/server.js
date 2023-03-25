// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://nishanth:nishanth2003@cluster0.fbotoww.mongodb.net/Inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const inventorySchema = new mongoose.Schema({
  Item_Name: String,
  Price: String,
  Quantity: String,
});

const Inventory = mongoose.model('Inventory', inventorySchema);

app.get('/IMS', (req, res) => {
  Inventory.find({}, (err, foundItems) => {
    if (!err) {
      res.send(foundItems);
    } else {
      console.log(err);
    }
  });
});

app.post('/insert', (req, res) => {
  const itemName = req.body.data.Item_Name;
  const price = req.body.data.Price;
  const quantity = req.body.data.Quantity;

  const newItem = new Inventory({
    Item_Name: itemName,
    Price: price,
    Quantity: quantity,
  });

  newItem.save((err) => {
    if (!err) {
      res.send('Successfully added a new item.');
    } else {
      console.log(err);
    }
  });
});

app.delete('/IMS/:id', (req, res) => {
  const id = req.params.id;

  Inventory.findByIdAndRemove(id, (err) => {
    if (!err) {
      console.log('Successfully deleted item.');
    } else {
      console.log(err);
    }
  });
});

app.put("/IMS/:id", (req, res) => {
  const { Item_Name, Price, Quantity } = req.body.data;
  const id = req.params.id;

  Inventory.findByIdAndUpdate(
    id,
    { Item_Name, Price, Quantity },
    { new: true },
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("IMS data updated successfully!");
      }
    }
  );
});

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});