"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Career_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Career"));
class CareerSeeder extends Seeder_1.default {
    async run() {
        await Career_1.default.createMany([
            {
                email: 'careers@r.us',
                description: 'Senior NodeJS developer in Bermuda',
            },
            {
                email: 'jobs@for.us',
                description: 'Remote Svelte coder experienced in lite code',
            },
        ]);
    }
}
exports.default = CareerSeeder;
//# sourceMappingURL=Career.js.map