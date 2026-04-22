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


route.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    const seriesUpdated = seriesService.updatePatch(id, nome);

    if (!seriesUpdated) {
        return res.status(404).json({ message: "serie não encontrada para ser atualizada" });
    }

    res.json(seriesUpdated);
});

module.exports = router;

