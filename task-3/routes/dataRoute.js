const express = require('express');
const {payload} = require('../utils/payload')
const Data = require('../model/dataModel');

const router = express.Router()

router
  .route("/")
  .get(async (req, res) => {
    try {
      const data = await Data.find();
      res.send(payload("Successful request", data));
    } catch (error) {
      console.log(error);
      res.send(payload("Successful request", data));
    }
  })
  .post(async (req, res) => {
    try {
      const { name, email, country } = req.body;
      const newData = new Data({
        name,
        email,
        country,
      });
      await newData.save();
      console.log(newData);
      res.send(payload("Successfully created a new data", newData));
      // res.redirect('/')
    } catch (error) {
      res.send(payload("ouch, an error occur", error));
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const singleData = await Data.findById(id);
    try {
      res.send(
        payload(`successfully accessed ${singleData.name} data`, singleData)
      );
    } catch (error) {
      if(error){
        res.status(400).send(payload("Error occur!!!", error))
      }
      if(!singleData) {
        res.send(payload("Can not find data with that id", data));
      }
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Data.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true,
      });
      res.status(200).send(payload("Updated successfully", data));
    } catch (error) {
      res.status(400).send("An error occur, failed to update", error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedData = await Data.findByIdAndDelete(id);
      res.status(200).send(payload("Data deleted successfully", deletedData));
    } catch {
      res.status(400).send("An error occur, failed to update", error);
    }
  });

module.exports = router