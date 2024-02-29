import express, { Request, Response } from "express";

interface VersionSupport {
    supported: boolean
}

export const supportedEndpointsRouter = express.Router();

const supported:VersionSupport = {supported: true};
const unsupported:VersionSupport = {supported: false};

supportedEndpointsRouter.get('/alpha', (_req: Request, res: Response<VersionSupport>) => res.status(200).json(supported));
supportedEndpointsRouter.get('/beta', (_req: Request, res: Response<VersionSupport>) => res.status(200).json(unsupported));
supportedEndpointsRouter.get('/production', (_req: Request, res: Response<VersionSupport>)  => res.status(200).json(unsupported));
