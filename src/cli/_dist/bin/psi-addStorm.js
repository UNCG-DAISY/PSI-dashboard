"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
commander_1.default
    .command('path')
    .description('Path to the storm data')
    .action(() => {
    console.log('path command for addStorm');
});
commander_1.default
    .command('default', { isDefault: true })
    .action(() => {
    console.log('default command for addStorm');
});
commander_1.default.parse(process.argv);
