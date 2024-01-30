import express, { Request, Response } from "express";

export const itemsRouter = express.Router();

itemsRouter.get('/alpha', (req: Request, res: Response) => {
    res.status(200);
    res.json({ supported: true });
});

itemsRouter.get('/beta', (req: Request, res: Response) => {
    res.status(200);
    res.json({ supported: false });
});

itemsRouter.get('/production', (req: Request, res: Response) => {
    res.status(200);
    res.json({ supported: false });
});