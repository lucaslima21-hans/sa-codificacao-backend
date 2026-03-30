import express from 'express'
import seriesservice from '../services/series.service.js'

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: "Bem-vindo à API de series."
  });
});


router.get('/series', (req, res) => {
  const series = [{
    id: 1,
    nome: "Chicago fire"
  }, {
    id: 2,
    nome: "Chicago med"
  }];
  
  res.json(series);
});


module.exports = router;

