"use strict";
/*
    Archive related Api calls
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const archives_1 = require("../../controllers/v1/archives");
const advancedResults_1 = require("../../middleware/v1/advancedResults");
const Archive_1 = require("../../models/Archive");
// "/api/v1/archives/"
const router = express_1.default.Router();
//Get all existing archives
router
    .route('/')
    .get(advancedResults_1.advancedResults(Archive_1.ArchiveModel, ''), archives_1.getAllArchives);
router
    .route('/FindArchive')
    .post(advancedResults_1.advancedResults(Archive_1.ArchiveModel, ''), archives_1.findArchive);
exports.default = router;
