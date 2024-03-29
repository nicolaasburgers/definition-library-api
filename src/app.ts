import express, { Request, Response } from "express";
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { supportedEndpointsRouter } from "./supported/router";
import { linksEndpointsRouter } from "./links/router";

dotenv.config();

if (!process.env.PORT) {
    console.log(`No port value specified...`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(helmet());

app.use("/links", linksEndpointsRouter);
app.use("/supported", supportedEndpointsRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

export { app };