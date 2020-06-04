"use strict";
/*
    This exported function connectDB is used to connect to the cloud Mongo DB
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
const colorize_1 = __importDefault(require("./utils/v1/colorize"));
exports.connectDB = async () => {
    var _a, _b, _c;
    //Get the uri to connect from the enviroment variables. Assume by default to use the development db
    let db_uri = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.MONGO_URI_DEV;
    //If in production mode, use production db
    if (process.env.NODE_ENV === 'production') {
        db_uri = (_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.MONGO_URI_PRODUCTION;
    }
    //Inform which DB using
    //console.log(`Using ${process.env.NODE_ENV === 'production'? 'production': 'development'} database`.magenta)
    colorize_1.default.info(`Using ${process.env.NODE_ENV === 'production' ? 'production' : 'development'} database`);
    //Connect
    const conn = (await (mongoose_1.connect(db_uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })));
    //Inform that the connection has been made
    //console.log(`MongoDB connected: ${conn?.connection?.host}`.cyan.underline.bold)
    colorize_1.default.success(`MongoDB connected: ${(_c = conn === null || conn === void 0 ? void 0 : conn.connection) === null || _c === void 0 ? void 0 : _c.host.underline}`);
};
