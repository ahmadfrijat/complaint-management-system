'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Complaint = require('../models/data-collection-class.js');
const complaintModel = require('../models/complaint.js')
const complaint = new Complaint(complaintModel);
const router = express.Router();


router.post('/',addcomplaint);
router.get('/',getcomplaint);
router.get('/:id', validator, getcomplaintById);
router.put('/:id', validator, updatecomplaint);
router.delete('/:id', validator, deletecomplaint);


async function addcomplaint(req,res) {

    const complaintObject = req.body;
  try {
    const resObj = await complaint.create(complaintObject);
    res.status(201).json(resObj);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getcomplaint(req,res,next) {
    try {
        const resObj = await complaint.read();
        res.json(resObj);
      } catch (error) {
        next(error);
      }
}

async function getcomplaintById(req,res,next) {
    try {
        const resObj = await complaint.read(req.params.id);
        res.json(resObj[0]);
      } catch (error) {
        next(error);
      }
}

async function updatecomplaint(req,res) {
    const complaintObject = req.body;
    try {
      const resObj = await complaint.update(req.params.id, complaintObject);
      res.json(resObj);
    } catch (error) {
      throw new Error(error.message);
    }
}

async function deletecomplaint(req,res,next) {
    try {
        const resObj = await complaint.delete(req.params.id);
        res.json(resObj);
      } catch (error) {
        next(error);
      }

}

module.exports = router;