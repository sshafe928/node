const express = require('express');
const router = express.Router();
// if you want to see what this looks like as a router look at people-router.js

const{ createPeople, readPeople, updatePeople, deletePerson } = require('../controllers/person')

router.get('/', readPeople)
router.post('/', createPeople)
router.put('/:id', updatePeople)
router.delete('/:id', deletePerson)

module.exports = router;