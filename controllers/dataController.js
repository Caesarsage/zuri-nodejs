const express = require("express");
const { payload } = require("../utils/payload");
const Data = require("../model/dataModel");

module.exports.showData = async (req, res) => {
  try {
    const data = await Data.find();
    res.send(payload("Successful request", data));
  } catch (error) {
    console.log(error);
    res.send(payload("error", error));
  }
};

module.exports.createData = async (req, res) => {
  try {
    const { name, email, country } = req.body;
    let user = await Data.findOne({email});
    if (user) return res
      .status(400)
      .send(payload("Email already exist", []));
    const newData = new Data({
      name,
      email,
      country,
    });
    await newData.save();
    console.log(newData);
    res.status(200).send(payload("Successfully created a new data", newData));
    // res.redirect('/')
  } catch (error) {
    res.status(400).send(payload("ouch, an error occur", error));
  }
};

module.exports.renderSingleData = async (req, res) => {
  const { id } = req.params;
  const singleData = await Data.findById(id);
  try {
    res.status(200).send(
      payload(`successfully accessed ${singleData.name} data`, singleData)
    );
  } catch (error) {
    if (!singleData) {
      res.status(401).send(payload("Can not find data with that id", singleData));
    }
    res.status(400).send(payload("Error occur!!!", error));
  }
};

module.exports.updateData = async (req, res) => {
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
};

module.exports.deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Data.findByIdAndDelete(id);
    res.status(200).send(payload("Data deleted successfully", deletedData));
  } catch {
    res.status(400).send("An error occur", error);
  }
};