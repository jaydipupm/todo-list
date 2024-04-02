var express = require('express');
var router = express.Router();
const { handleCreate, handleDelete, handleUpdate, handleGetList } = require("../controllers/Task")

router.post('', handleCreate)
  .delete('/:id', handleDelete)
  .patch('/:id', handleUpdate)
  .get('', handleGetList)

module.exports = router;