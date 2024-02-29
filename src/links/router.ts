import express, { Request, Response } from "express";

interface Links {
    documentation_start: string;
    documentation_tracking_basic: string;
    documentation_tracking_custom: string;
    documentation_authentication: string;
    documentation_repositories: string;
}

export const linksEndpointsRouter = express.Router();

linksEndpointsRouter.get('/all', (_req: Request, res: Response) => {
    const links:Links = {
        documentation_start: "https://github.com/nicolaasburgers/definition-library-releases/wiki",
        documentation_tracking_basic: "https://github.com/nicolaasburgers/definition-library-releases/wiki/Telemetry-for-alpha-and-beta-versions",
        documentation_tracking_custom: "https://github.com/nicolaasburgers/definition-library-releases/wiki/Telemetry",
        documentation_authentication: "https://github.com/nicolaasburgers/definition-library-releases/wiki/Concepts-and-terminology#github-oauth-app",
        documentation_repositories: "https://github.com/nicolaasburgers/definition-library-releases/wiki/Concepts-and-terminology#repository"
    }
    res.status(200).json(links);
});