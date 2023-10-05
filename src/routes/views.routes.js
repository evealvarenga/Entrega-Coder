import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    try {
        res.render("home");
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los productos de los productos.' });
    }
    
});

router.get("/realtimeproducts", (req, res) => {
    try {
        res.render("realTimeProducts");
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los productos de los productos.' });
    }
});

export default router;
