import express, { Router } from 'express';
import FruitService from '../services/fruitService.js'; 

const app = express.Router()

Router.get('/fruits', (req, res) => {
    
    res.json(FruitService.getAllFruits());
});


export default app;