const express = require('express');

const { showData, createData, renderSingleData, updateData, deleteData } = require('../controllers/dataController');

const router = express.Router()

router
  .route("/")
  .get( showData )
  .post( createData );

router
  .route("/:id")
  .get( renderSingleData )
  .put( updateData )
  .delete( deleteData );

module.exports = router