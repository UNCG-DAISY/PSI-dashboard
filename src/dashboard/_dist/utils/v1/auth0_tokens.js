"use strict";
/*
  This file is used to get the management token so that we can get user roles
  and access information from auth0. This token changes every so offten
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getManagementTokens = void 0;
const axios_1 = __importDefault(require("axios"));
const colorize_1 = __importDefault(require("./colorize"));
const getManagementTokens = async () => {
    //Settings for api POST request
    const options = {
        method: 'POST',
        url: process.env.AUTH0_TOKEN_URL,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            grant_type: 'client_credentials',
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`
        }
    };
    colorize_1.default.log("Getting Auth0 management token");
    //Api call to get the token
    try {
        const management_data = (await axios_1.default.post(options.url, options.form)).data;
        // console.log("Got Auth0 management token".bgMagenta)
        colorize_1.default.success("Got Auth0 management token");
        return management_data.access_token;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.getManagementTokens = getManagementTokens;
