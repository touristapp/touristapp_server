import { Router } from 'express';

const api = Router();

api.get("/", (req, res)=>{
    res.status(200).json({ fuel: { "message": "ok" } });
});

export default api;