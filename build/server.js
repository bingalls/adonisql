"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const source_map_support_1 = __importDefault(require("source-map-support"));
const Ignitor_1 = require("@adonisjs/core/build/src/Ignitor");
source_map_support_1.default.install({ handleUncaughtExceptions: false });
new Ignitor_1.Ignitor(__dirname)
    .httpServer()
    .start()
    .catch(console.error);
//# sourceMappingURL=server.js.map