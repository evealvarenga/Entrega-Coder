import { Router } from "express";
import ProductManager from '../ProductManager.js';

const router = Router()
const manager = new ProductManager('./src/productos.json');

router.get("/", async (req, res) => {
    try {
        const products = await manager.getProducts(req.query);
        res.render("home", {response: products});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
});

router.get("/realtimeproducts", async (req, res) => {
    try {
        const products = await manager.getProducts(req.query);
        res.render("realTimeProducts", {response: products});
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los productos de los productos.' });
    }
});

export default router;
