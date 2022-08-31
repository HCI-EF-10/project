import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import Logger from "./util/Logger";
import {config} from './config/config';
import exampleRoutes from './routes/ExampleRoutes';

const router = express();
const httpServer = http.createServer(router);

/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, {retryWrites: true, w: 'majority'})
    .then(() => {
        Logger.info('Mongo DB connected successfully.');
        StartServer();
    })
    .catch((error) => Logger.error(error));

/** Only Start Server if Mongoose Connects */
const StartServer = () => {
    /** Log the request */
    router.use((req, res, next) => {
        /** Log the req */
        Logger.info(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logger.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });

    router.use(express.urlencoded({extended: true}));
    router.use(express.json());

    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    router.use('/examples', exampleRoutes);

    /** Health-check */
    router.get('/ping', (req, res, next) => res.status(200).json({message: 'pong'}));

    /** Error handling */
    router.use((req, res, next) => {
        const error = new Error('Not found');

        Logger.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    httpServer.listen(config.server.port, () => Logger.info(`Server is running on port ${config.server.port}`));
};