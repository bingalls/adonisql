"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ace_1 = require("@adonisjs/ace");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
exports.default = ace_1.listDirectoryFiles(__dirname, Application_1.default.appRoot, ['./commands/index.js']);
//# sourceMappingURL=index.js.map