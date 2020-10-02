"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION', 'sqlite'),
    connections: {
        sqlite: {
            client: 'sqlite',
            connection: {
                filename: Application_1.default.tmpPath('db.sqlite3'),
            },
            useNullAsDefault: true,
            healthCheck: false,
        },
    },
    orm: {},
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map